import { Link, useLocation, useNavigate } from 'react-router-dom'
import './HeaderComponent.css'
import { useEffect, useState } from 'react'

function HeaderComponent() {
  const routerMain = useNavigate();
  const handleMain = (main) => {
    routerMain(main);
  }

  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect( () => {
    if(location.pathname === '/linksHome') {
      setTitle('a Home Page');
    } else if(location.pathname === '/linksBlog') {
      setTitle('a Home Blog');
    } else {
      setTitle('');
    }
  }, [location.pathname]);

  return (
    <header className='header'>
      <h2 onClick={() => handleMain('/')} className='title'>Bienvenido {title ? title : '!'}</h2>
      <nav>

        <ul className='link-list'>
          <li>
            <Link className='link' to="/linksHome">Home</Link>
          </li>
          <li>
            <Link className='link' to="/linksBlog">Blog</Link>
          </li>
          <li>
            <Link className='link' to="/linksSettings">Settings</Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default HeaderComponent








