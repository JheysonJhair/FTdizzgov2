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


export const verifyEmail = async (email) => {
  try {
    const url = `https://xgoobk.ccontrolz.com/auth-validate?email=${encodeURIComponent(email)}`;
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};



export const verifyCode = async (code, gmail) => {
  try {
    const url = 'https://xgoobk.ccontrolz.com/user/validate';
    const response = await axios.post(url, {
      Email: gmail,
      Code: code,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};