import axios from "axios";

//Login
export const loginUser = async (email, password) => {
  try {
    const response = await fetch("https://xgoobk.ccontrolz.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Email: email,
        Password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Error al iniciar sesión");
    }

    const user = await response.json();
    return user;
  } catch (error) {
    throw new Error("Error al iniciar sesión");
  }
};

//Register
export const registerUser = async ({
  Email,
  Password,
  FirstName,
  LastName,
  BirthDate,
  ProfileImage,
}) => {
  try {
    const response = await axios.post(
      "https://xgoobk.ccontrolz.com/user/insert",
      {
        Email,
        Password,
        FirstName,
        LastName,
        BirthDate,
        ProfileImage,
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};

//Verficar email
export const verifyEmail = async (email) => {
  try {
    const url = `https://xgoobk.ccontrolz.com/auth-validate?email=${encodeURIComponent(
      email
    )}`;
    const response = await axios.get(url);

    return response;
  } catch (error) {
    throw error;
  }
};

//Verficcar codigo
export const verifyCode = async (code, gmail) => {
  try {
    const url = "https://xgoobk.ccontrolz.com/user/validate";
    const response = await axios.post(url, {
      Email: gmail,
      Code: code,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
