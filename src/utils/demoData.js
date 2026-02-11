// Demo/Mock data for testing without backend
export const isDemoMode = import.meta.env.VITE_DEMO_MODE === 'true';

export const demoUser = {
  id: "demo-user-123",
  email: "demo@kystlaget.no",
  name: "Demo User",
  phone: "+47 123 45 678",
  memberNumber: "DEMO001",
};

export const demoBoats = [
  {
    id: "boat-1",
    name: "Elfryd I",
    type: "Motor boat",
    capacity: 6,
    location: "Pier A",
    imageUrl: "/images/boat.jpg",
    available: true,
  },
  {
    id: "boat-2",
    name: "Elfryd II",
    type: "Sailing boat",
    capacity: 4,
    location: "Pier B",
    imageUrl: "/images/boat.jpg",
    available: true,
  },
];

export const demoBookings = [
  {
    id: "booking-1",
    boatId: "boat-1",
    boatName: "Elfryd I",
    userId: "demo-user-123",
    startTime: new Date(Date.now() + 86400000 * 2).toISOString(), // 2 days from now
    endTime: new Date(Date.now() + 86400000 * 2 + 7200000).toISOString(), // 2 days + 2 hours
    status: "confirmed",
  },
  {
    id: "booking-2",
    boatId: "boat-2",
    boatName: "Elfryd II",
    userId: "demo-user-123",
    startTime: new Date(Date.now() + 86400000 * 5).toISOString(), // 5 days from now
    endTime: new Date(Date.now() + 86400000 * 5 + 10800000).toISOString(), // 5 days + 3 hours
    status: "confirmed",
  },
];

// Helper to create mock API responses
export const createMockResponse = (data, status = 200) => {
  return Promise.resolve({
    ok: status >= 200 && status < 300,
    status,
    statusText: status === 200 ? 'OK' : 'Error',
    json: () => Promise.resolve(data),
  });
};

// Check if user is in demo mode
export const isDemoUser = () => {
  const token = localStorage.getItem("token");
  return token && JSON.parse(token) === "DEMO_TOKEN";
};

// Get demo user data from localStorage
export const getDemoUser = () => {
  try {
    const demoUserData = localStorage.getItem("demoUser");
    return demoUserData ? JSON.parse(demoUserData) : demoUser;
  } catch {
    return demoUser;
  }
};
