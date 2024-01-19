import axios from "axios";

export const loginUser = async (email, password) => {
  try {
    const response = await fetch("https://xgoobk.ccontrolz.com/user");
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    return user;
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
};

export const registerUser = async ({
  email,
  password,
  firstName,
  lastName,
  birthDate,
  profileImage,
}) => {
  try {
    const response = await axios.post(
      "https://xgoobk.ccontrolz.com/user/insert",
      {
        email,
        password,
        firstName,
        lastName,
        birthDate,
        profileImage,
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};
