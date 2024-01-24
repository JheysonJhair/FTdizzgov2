import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    IdUser: "",
    Email: "",
    Password: "",
    FirstName: "",
    LastName: "",
    BirthDate: "",
    Phone: "",
    ProfileImage: "",
  });

  const setUserInfo = ({
    IdUser,
    Email,
    Password,
    FirstName,
    LastName,
    BirthDate,
    Phone,
    ProfileImage,
  }) => {
    setUserData({
      ...userData,
      IdUser,
      Email,
      Password,
      FirstName,
      LastName,
      BirthDate,
      Phone,
      ProfileImage,
    });
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
