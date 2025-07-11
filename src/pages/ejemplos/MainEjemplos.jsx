import { useNavigate } from "react-router-dom"

function MainEjemplos() {
  const routesNav = useNavigate();
  const handleRoutes = (routes) => {
    routesNav(routes);
  }

  return (
    <div>

      <h1 onClick={() => handleRoutes('/')}>Ejemplos de React</h1>

      <ul>
        <li>
          <button onClick={() => handleRoutes('/ejemplo1')}>
            Ejemplo 1
          </button>
        </li>
        <li>
          <button>
            Ejemplo 2
          </button>
        </li>
      </ul>
    </div>
  )
}

export default MainEjemplos