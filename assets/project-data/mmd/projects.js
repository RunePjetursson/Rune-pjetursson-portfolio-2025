// Master list of projects
export const projects = [
  async () => {
    const data = await import("../mmd/design.json");
    return { id: "fitnessApp", ...data.default }; // You can assign a custom ID here
  },
  async () => {
    const data = await import("../mmd/fysio-cannerslund.json");
    return { id: "fysioCannerslund", ...data.default }; // Assigning custom ID
  },
  async () => {
    const data = await import("../mmd/taiji.json");
    return { id: "taijiApp", ...data.default }; // Assigning custom ID
  },
  // Add more project imports here
];
