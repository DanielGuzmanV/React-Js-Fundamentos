import PropsPadrehijo from "../../components/components-fundamentos/PropsPadrehijo";


function PagePropsPadrehijo() {

  // Uso de props padre a hijo:
  const message = "Mensaje desde el componente padre";
  const messageObject = "Objeto desde el componente padre";
  const objPerson = {
    name: "Marcelo",
    lastname: "Cabrera",
    age: 42,
  }


  return (
    <div>
      <PropsPadrehijo 
        message ={message}
        messageObject={messageObject}
        objPerson={objPerson}
      >

      </PropsPadrehijo>
    </div>
  )
}

export default PagePropsPadrehijo;

