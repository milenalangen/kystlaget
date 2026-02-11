import { authToken } from "../../store/authToken";
import { isDemoUser, demoBookings, createMockResponse } from "../../utils/demoData";

export const getUserBookings = async ({ userId }) => {
  // Demo mode: return mock bookings
  if (isDemoUser()) {
    return createMockResponse(demoBookings);
  }

  const response = await fetch(`/api/Bookings/${userId}/hasBooked`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken.value}`,
    },
    credentials: "include",
  });
  return response;
};
