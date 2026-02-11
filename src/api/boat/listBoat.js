import { authToken } from "../../store/authToken";
import { isDemoUser, demoBoats, createMockResponse } from "../../utils/demoData";

export const listBoat = async () => {
  // Demo mode: return mock boats
  if (isDemoUser()) {
    const mockResponse = await createMockResponse(demoBoats);
    return await mockResponse.json();
  }

  const response = await fetch(`/api/Boats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken.value}`,
    },
    credentials: "include",
  });
  const data = await response.json();
  return data;
};
