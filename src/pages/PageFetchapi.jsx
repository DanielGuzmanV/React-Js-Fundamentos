import { useEffect, useState } from "react"

const API = 'https://jsonplaceholder.typicode.com/users';

function PageFetchapi() {
  const[users, setUsers] = useState([]);
  const getUsersApi = async (dataApi) => {
    const response = await fetch(dataApi);
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsersApi(API);
  },[]);

  const HTMLUsers = users.map((valueUser) => {
    return (
      <div key={valueUser.id}>
        <h3>{valueUser.id} - {valueUser.name}</h3>
        <h3>Correo: {valueUser.email}</h3>
        <h3>Numero: {valueUser.phone}</h3>
        <br/>
      </div>
    )
  })


  return (
    <div>
      <h2>Fetch() | Llamada a una API</h2>
      <section>
        {HTMLUsers}
      </section>
    </div>
  )
}

export default PageFetchapi