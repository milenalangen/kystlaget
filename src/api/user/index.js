import { signal } from "@preact/signals-react";
import { authToken } from "../../store/authToken";
import { isDemoUser, getDemoUser } from "../../utils/demoData";

class User {
  state = signal("loading");
  data = signal(null);
  image = signal("");

  constructor() {
    // initially call user
    this.refetch();
  }

  async refetch() {
    // Demo mode: use mock user data
    if (isDemoUser()) {
      this.data.value = getDemoUser();
      this.state.value = "authenticated";
      this.image.value = "/images/placeholderUser.svg";
      return;
    }

    try {
      const response = await fetch(`/api/User/Profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken.value}`,
        },
        credentials: "include",
      });
      if (response.status === 401) {
        return (authToken.value = null), localStorage.removeItem("token");
      }
      const data = await response.json();
      this.data.value = data;
      this.state.value = "authenticated";
      const userid = data.id;
      await this.getUserImage(userid);
    } catch (response) {
      const errorJson = response.toJSON?.();
      // user is unauthenticated
      if (errorJson.status === 401) {
        this.state.value = "unauthenticated";
      }
    }
  }

  getUserImage = async (userid) => {
    const myServerUrl = import.meta.env.VITE_PUBLIC_MYSERVER_URL;

    try {
      const response = await fetch(`${myServerUrl}/api/image-upload/${userid}`);
      if (!response.ok) {
        throw Error("Failed to fetch image");
      }
      const data = await response.json();
      const imageData = data.imagedata;
      this.image.value = imageData;
    } catch (error) {
      console.log(error);
    }
  };

  async updateUser({ name, phone, email, role, bookingIDs }) {
    const userId = this.data.value?.id;
    const response = await fetch(`/api/User/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken.value}`,
      },
      credentials: "include",
      body: JSON.stringify({
        name,
        phone,
        email,
        role,
        bookingIDs,
        isActive: true,
      }),
    });
    return response;
  }
}

const user = new User();

export default user;
