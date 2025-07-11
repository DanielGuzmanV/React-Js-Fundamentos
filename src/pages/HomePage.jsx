import { useNavigate } from "react-router-dom"
import styles from './HomePage.module.css';
import reactLogo from '../assets/react.svg'

function HomePage() {

  const routerNavigation = useNavigate();
  const handleRoutes = (ruta) => {
    routerNavigation(ruta);
  }

  return (
    <div>

      <h1 onClick={() => handleRoutes('/')} >
        Fundamentos React
        <img style={{
          width: '50px',
          padding: '8px'
        }} src={reactLogo}/>
      </h1>


      <ul className={styles.ulstl}>
        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={() => handleRoutes('/menu')}>
            Menu inicio
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/formBasico')}>
            Formulario basico
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/renderizado')}>
            Renderizado
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/listas')}>
            Renderizado de listas
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/propsPH')}>
            Props padre a hijo
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/useClass')}>
            ClassName
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/propsHP')}>
            Props hijo a padre
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/stateUp')}>
            Comunicacion de componentes
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/useEffect')}>
            Uso de useEffect
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/fetch')}>
            Uso de API
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/formulario')}>
            Formularios react
          </button>
        </li>

        <li className={styles.listItem}>
          <button className={styles.menuButton} onClick={ () => handleRoutes('/linksHome')}>
            Links react
          </button>
        </li>



      </ul>

    </div>
  )
}

export default HomePage