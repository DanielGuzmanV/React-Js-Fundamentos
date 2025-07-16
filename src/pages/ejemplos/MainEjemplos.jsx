import { useNavigate } from "react-router-dom"
import styles from '../ejemplos/MainEjemplo.module.css';

function MainEjemplos() {
  const routesNav = useNavigate();
  const handleRoutes = (routes) => {
    routesNav(routes);
  }

  return (
    <div>

      <h1 onClick={() => handleRoutes('/')}>Ejemplos de React</h1>

      <ul className={styles.valueList}>
        <li className={styles.valueItem}>
          <button className={styles.valueBtn} onClick={() => handleRoutes('/ejemplo1')}>
            Ejemplo 1
          </button>
        </li>
        
      </ul>
    </div>
  )
}

export default MainEjemplos