import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import HomePage from "../pages/fundamentos/HomePage";
import MainReact from "../pages/MainReact";
import MainEjemplos from "../pages/ejemplos/MainEjemplos";
import Ejemplo1 from "../pages/ejemplos/ejemplo1/Ejemplo1";

const AtributoReactivo = lazy(() => import("../components/components-fundamentos/AtributoReactivo"));
const Renderizado = lazy(() => import("../components/components-fundamentos/Renderizado"));
const Listas = lazy(() => import("../components/components-fundamentos/Listas"));
const ClassComponent = lazy(() => import("../components/components-fundamentos/ClassComponent"));
const PageMenu = lazy(() => import("../pages/fundamentos/PageMenu"));
const PagePropsPadrehijo = lazy(() => import("../pages/fundamentos/PagePropsPadrehijo"));
const PagePropsHijoPadre = lazy(() => import("../pages/fundamentos/PagePropsHijoPadre"));
const PageStateUp = lazy(() => import("../pages/fundamentos/PageStateUp"));
const PageUseEffect = lazy(() => import("../pages/fundamentos/PageUseEffect"));
const PageFetchapi = lazy(() => import("../pages/fundamentos/PageFetchapi"));
const PageFormularios = lazy(() => import("../pages/fundamentos/PageFormularios"));
const LinksHomePage = lazy(() => import("../pages/fundamentos/LinksHomePage"));
const LinksBlogPage = lazy(() => import("../pages/fundamentos/LinksBlogPage"));
const PostDetails = lazy(() => import("../pages/fundamentos/PostDetails"));
const LinksSettingsPage = lazy(() => import("../pages/fundamentos/LinksSettingsPage"));
const ErrorPage = lazy(() => import( "../pages/fundamentos/ErrorPage"));


function MyRoutes() {
  return (
    <Suspense fallback={<h1>Loading page...</h1>}>
      
      <Routes>
        <Route path="/" element={<MainReact/>}/>

        {/* Rutas - Fundamentos: */}
        <Route path="/homePage" element={<HomePage/>}/>
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
        <Route path="/linksBlog" element={<LinksBlogPage/>}/>
        <Route path="/linksHome" element={<LinksHomePage/>}/>
        <Route path="/linksHome/:id" element={<PostDetails/>}/>
        <Route path="/linksSettings" element={<LinksSettingsPage/>}/>

        <Route path="*" element={<ErrorPage/>}/>
        {/* ========================================================= */}

        {/* Rutas - Ejemplos: */}
        <Route path="/mainEjemplo" element={<MainEjemplos/>}/>
        <Route path="/ejemplo1" element={<Ejemplo1/>}/>


        
      </Routes>
    </Suspense>
  )
}

export default MyRoutes