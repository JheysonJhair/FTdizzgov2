import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    idUser: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    birthDate: "",
    profileImage: ""
  });

  const setUserInfo = ({ idUser, email, password, firstName, lastName, birthDate, profileImage }) => {
    setUserData({ ...userData, idUser, email, password, firstName, lastName, birthDate, profileImage });
  };

  return (
    <UserContext.Provider value={{ userData, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
