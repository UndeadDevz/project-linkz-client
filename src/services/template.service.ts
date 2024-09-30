import Cookies from "js-cookie";

export const getUserTemplates = async () => {
  const url = `http://localhost:8080/template/`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  const result = await response.json();
  return result;
};
