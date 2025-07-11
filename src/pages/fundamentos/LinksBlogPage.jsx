import { useState } from "react"
import HeaderComponent from "../../components/components-fundamentos/HeaderComponent"
import RegisterSettings from "../../components/components-fundamentos/RegisterSettings"

function LinksBlogPage() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <HeaderComponent/>
      <h2 style={{color: 'red'}} data-testid="homepage-title">Blog page Links</h2>

      <div style={{
        backgroundColor:'#92b4b9',
        padding: '1px',
        borderRadius: '10px'
      }}>
        <h2 style={{color:'blue'}}>Counter Buttons</h2>

        <h2>
          <button style={{margin: '10px'}} onClick={() => setCounter(counter === 0 ? counter :counter - 1)}> - </button>
          <span data-testid="counter">{counter}</span>
          <button style={{margin: '10px'}} onClick={() => setCounter(counter + 1)} data-testid="increase-counter"> + </button>
        </h2>

      </div>


      <RegisterSettings/>

    </>
  )
}

export default LinksBlogPage