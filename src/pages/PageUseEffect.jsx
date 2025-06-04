import { useState } from "react"
import ChildUseEffect from "../components/ChildUseEffect";

function PageUseEffect() {
  const [showChild, setShowChild] = useState(true);

  return (
    <div>
      <h2> useEffect() | Ciclo de vida de componentes</h2>
    
      <button onClick={() => setShowChild(!showChild)}>
        toggle Child
      </button>
    
      {showChild && <ChildUseEffect/>}
    
    </div>
  )
}

export default PageUseEffect



