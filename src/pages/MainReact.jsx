import styles from './MainReact.module.css';
import { useNavigate } from "react-router-dom";
import reactLogo from '../assets/react.svg'

const MainReact = () => {
  

  const routesNavigation = useNavigate();
  const handleRoutes = (routes) => {
    routesNavigation(routes);
  }

  return (
    <div>

      <h1>
        Proyecto React
        <img style={{
          width: '50px',
          padding: '8px'
        }} src={reactLogo}/>
      </h1>

      <ul className={styles.listUl}>
        <li className={styles.liItem}>
          <button className={styles.menuBtn} onClick={() => handleRoutes('/homePage')}>
            Fundamentos
          </button>
        </li>
        <li className={styles.liItem}>
          <button className={styles.menuBtn} onClick={() => handleRoutes('')}>
            Proyectos
          </button>
        </li>
        <li className={styles.liItem}>
          <button className={styles.menuBtn} onClick={() => handleRoutes('')}>
            Ejemplos
          </button>
        </li>
      </ul>

    </div>
  )
}

export default MainReact