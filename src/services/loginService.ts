const baseUrl = import.meta.env.VITE_API_URL;

export const register = async (user: any) => {
  const newUser = await fetch(`${baseUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  return newUser;
};
