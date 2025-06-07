import { useNavigate } from "react-router-dom"

function HomePage() {

  const routerNavigation = useNavigate();
  const handleRoutes = (ruta) => {
    routerNavigation(ruta);
  }

  return (
    <div>

      <ul>
        <li>
          <button onClick={() => handleRoutes('/menu')}>
            Menu inicio
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/formBasico')}>
            Formulario basico
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/renderizado')}>
            Renderizado
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/listas')}>
            Renderizado de listas
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/propsPH')}>
            Props padre a hijo
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/useClass')}>
            ClassName
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/propsHP')}>
            Props hijo a padre
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/stateUp')}>
            Comunicacion de componentes
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/useEffect')}>
            Uso de useEffect
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/fetch')}>
            Uso de API
          </button>
        </li>

        <li>
          <button onClick={ () => handleRoutes('/formulario')}>
            Formularios react
          </button>
        </li>



      </ul>

    </div>
  )
}

export default HomePage