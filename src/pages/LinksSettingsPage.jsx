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
      <div>Settings Page</div>
    </>
  )
}

export default LinksSettingsPage





