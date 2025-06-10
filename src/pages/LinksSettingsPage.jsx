import { useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import { Navigate } from "react-router-dom";

function LinksSettingsPage() {
  const [hasAccess, setAccess] = useState(true);
  if(!hasAccess) return <Navigate to={'/error'}/>

  return (
    <>
      <HeaderComponent/>
      <div>Settings Page</div>
    </>
  )
}

export default LinksSettingsPage





