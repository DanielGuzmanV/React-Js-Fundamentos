import { useState } from "react"
import PropsHijopadre from "../components/PropsHijopadre"

function PagePropsHijoPadre() {
  // Uso props hijo a padre:
  const [displayName, setDisplayName] = useState("")
  const handleLogin = (valueName) => {
    setDisplayName(valueName)
  }

  return (
    <div>

      <h2> Props | Comunicacion hijo-padre</h2>
      <h3>Hola {displayName}</h3>
      <PropsHijopadre handleLogin={handleLogin}>
      </PropsHijopadre>

    </div>
  )
}

export default PagePropsHijoPadre

