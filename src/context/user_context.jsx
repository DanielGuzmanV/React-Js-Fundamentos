import { createContext, useState } from "react";

const UserContext = createContext();

function UserProviderWrapper(props) {
  const [user, setDataUser] = useState(null);

  const dataUser = {
    nombre: 'Armando',
    email: 'armando@example.dev',
    isAdmin: true,
  }

  const loginUser = () => {
    setDataUser(dataUser);
  }

  const logoutUser = () => {
    setDataUser(null);
  }

  return (
    <UserContext.Provider value={{user, setDataUser, loginUser, logoutUser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProviderWrapper};
