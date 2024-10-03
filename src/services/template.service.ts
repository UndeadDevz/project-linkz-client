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

export const getTemplate = async (id: string) => {
  const url = `http://localhost:8080/template/${id}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
  });

  const result = await response.json();
  return result;
};

// este va a setear valores por defecto
// export const createTemplate = async (data: any) => {
//   const url = `http://localhost:8080/template`;
//   const response = await fetch(url, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${Cookies.get("authToken")}`,
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };

// este actualiza los valores por defecto
export const updateTemplate = async (id: string, data: any) => {
  const url = `http://localhost:8080/template/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("authToken")}`,
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
