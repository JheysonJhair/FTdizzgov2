import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    idUser: "",
    profileImage: "", 
  });

  const setUserInfo = ({ idUser, profileImage }) => {
    setUserData({ ...userData, idUser, profileImage });
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
