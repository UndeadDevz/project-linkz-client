const baseUrl = import.meta.env.VITE_API_URL;

export const register = async (user: any) => {
  const res = await fetch(`${baseUrl}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  const newUser = await res.json();
  return newUser;
};

export const login = async (user: any) => {
  console.log(user);
  const res = await fetch(`${baseUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  const loggedUser = await res.json();
  return loggedUser;
};

export const getUser = async () => {
  const response = await fetch(`${baseUrl}/user/`);
  const user = await response.json();
  return { user: user };
};
