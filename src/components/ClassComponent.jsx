import '../components/ClassComponent.css'

function ClassComponent() {
  return(
    <div>
      <h2>Uso de ClassName</h2>
      
      <h2 className="titleValue">ClassName - htmlFor - select defaultValue</h2>
    
      <form>
        <label htmlFor='username'>Username: </label>
        <input type='text' id='username' placeholder='Ingrese un texto' />

        <br/>

        <select className='selectBox' defaultValue={'javascript'}>

          <option value='html'>HTML</option>
          <option value='css'>Css</option>
          <option value='javascript'>Javascript</option>
          <option value='react'>React</option>

        </select>

      </form>
    
    
    </div>
  )
}

export default ClassComponent;



