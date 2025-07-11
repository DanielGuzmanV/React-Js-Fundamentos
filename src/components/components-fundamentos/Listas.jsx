// Listas:
const movies = ["Star wars lll", "Rango", "Monster House", "Spider-man 2"];
const listMovies = movies.map((value, idx) => {
  return <p key={idx}>{idx + 1}. - {value}</p>
})

// Lista de objetos:
const animalesRandom = [
  {
    id: 1,
    name: 'Perro',
    image: 'https://media.tenor.com/ZJT4S4lpfpIAAAAM/perro-bailando.gif'
  },
  {
    id: 2,
    name: 'Gato',
    image: 'https://hips.hearstapps.com/hmg-prod/images/gato-bailando-1550658206.gif'
  },
  {
    id: 3,
    name: 'Sapo',
    image: 'https://gifdb.com/images/high/futurama-412-x-234-gif-ufevae6107fdcqg3.gif'
  },
];
const listAnimales = animalesRandom.map((valAnimal) => {
  return (
    <div key={valAnimal.id}>
      <h3>{valAnimal.name}</h3>
      <img src={valAnimal.image} alt="Imagen_de_animal" width={300}/>
    </div>
  )
})



function Listas() {
  return (
    <div>
      <h2>Renderizado de listas</h2>
      {listMovies}

      <h2>Renderizado de lista de objetos</h2>
      {listAnimales}
    </div>
  )
}

export default Listas










