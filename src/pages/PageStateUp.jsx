import { useState } from "react"
import StateUpChil1 from "../components/StateUpChil1"
import StateUpChild2 from "../components/StateUpChild2"

function StateUp() {
  const [displayName, setDisplayName] = useState("");
  const [valueName, setValueName] = useState("")

  const onChangeInput = (event) => {
    setValueName(event.target.value)
  }

  const functionLogin = (name) => {
    setDisplayName(name);
  }

  return (
    <div>
      <h2>State Up | Comunicacion entre hermanos</h2>
      <h3>Hola: {displayName}</h3>

      <StateUpChild2 userName={displayName}/>

      <StateUpChil1 
        functionLogin={functionLogin} 
        valueName={valueName}
        onChangeInput={onChangeInput}
      />

    </div>
  )
}

export default StateUp