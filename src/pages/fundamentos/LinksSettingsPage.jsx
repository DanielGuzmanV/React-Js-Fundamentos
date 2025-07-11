import { useContext, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user_context";

function LinksSettingsPage() {

  const {user} = useContext(UserContext);

  if(!user?.isAdmin) return <Navigate to={'/error'}/>

  return (
    <>
      <HeaderComponent/>
      <div>
        <h2>Settings</h2>
        
        <h3>Nombre: </h3>
        <span>{user.nombre}</span>
        <h3>Correo: </h3>
        <span>{user.email}</span>

      </div>
    </>
  )
}

export default LinksSettingsPage





