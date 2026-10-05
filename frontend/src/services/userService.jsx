import { api } from "../utils/config";

const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.token) {
    throw new Error("Você precisa estar autenticado para acessar seu perfil.");
  }

  return user.token;
};

const parseResponse = async (response) => {
  const data = await response.json();

  if (!response.ok || data.errors) {
    const error = Array.isArray(data.errors) ? data.errors[0] : data.message;
    throw new Error(error || `A solicitação falhou (${response.status}).`);
  }

  return data;
};

const profile = async () => {
  const response = await fetch(`${api}/users/profile`, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return parseResponse(response);
};

const updateProfile = async (formData) => {
  const response = await fetch(`${api}/users`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  });

  return parseResponse(response);
};

export default { profile, updateProfile };
