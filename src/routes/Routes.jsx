import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import PageMenu from "../pages/PageMenu"
import AtributoReactivo from "../components/AtributoReactivo"
import Renderizado from "../components/Renderizado"
import Listas from "../components/Listas"
import PagePropsPadrehijo from "../pages/PagePropsPadrehijo"
import ClassComponent from "../components/ClassComponent"
import PagePropsHijoPadre from "../pages/PagePropsHijoPadre"
import PageStateUp from "../pages/PageStateUp"
import PageUseEffect from "../pages/PageUseEffect"
import PageFetchapi from "../pages/PageFetchapi"
import PageFormularios from "../pages/PageFormularios"
import LinksHomePage from "../pages/LinksHomePage"
import LinksBlogPage from "../pages/LinksBlogPage"

function MyRoutes() {
  return (

    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/menu" element={<PageMenu/>}/>
      <Route path="/formBasico" element={<AtributoReactivo/>}/>
      <Route path="/renderizado" element={<Renderizado/>}/>
      <Route path="/listas" element={<Listas/>}/>
      <Route path="/propsPH" element={<PagePropsPadrehijo/>}/>
      <Route path="/useClass" element={<ClassComponent/>}/>
      <Route path="/propsHP" element={<PagePropsHijoPadre/>}/>
      <Route path="/stateUp" element={<PageStateUp/>}/>
      <Route path="/useEffect" element={<PageUseEffect/>}/>
      <Route path="/fetch" element={<PageFetchapi/>}/>
      <Route path="/formulario" element={<PageFormularios/>}/>
      <Route path="/linksHome" element={<LinksHomePage/>}/>
      <Route path="/linksBlog" element={<LinksBlogPage/>}/>
    </Routes>

  )
}

export default MyRoutes