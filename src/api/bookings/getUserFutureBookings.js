import { authToken } from "../../store/authToken";
import { isDemoUser, demoBookings, createMockResponse } from "../../utils/demoData";

export const getUserFutureBookings = async ({ userId }) => {
  // Demo mode: return mock future bookings
  if (isDemoUser()) {
    const futureBookings = demoBookings.filter(booking =>
      new Date(booking.startTime) > new Date()
    );
    return createMockResponse(futureBookings);
  }

  const response = await fetch(`/api/Bookings/${userId}/futureBookings`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken.value}`,
    },
    credentials: "include",
  });
  return response;
};
