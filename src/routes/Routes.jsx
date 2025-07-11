import { Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

import HomePage from "../pages/HomePage";
import MainReact from "../pages/MainReact";

const AtributoReactivo = lazy(() => import("../components/AtributoReactivo"));
const Renderizado = lazy(() => import("../components/Renderizado"));
const Listas = lazy(() => import("../components/Listas"));
const ClassComponent = lazy(() => import("../components/ClassComponent"));
const PageMenu = lazy(() => import("../pages/PageMenu"));
const PagePropsPadrehijo = lazy(() => import("../pages/PagePropsPadrehijo"));
const PagePropsHijoPadre = lazy(() => import("../pages/PagePropsHijoPadre"));
const PageStateUp = lazy(() => import("../pages/PageStateUp"));
const PageUseEffect = lazy(() => import("../pages/PageUseEffect"));
const PageFetchapi = lazy(() => import("../pages/PageFetchapi"));
const PageFormularios = lazy(() => import("../pages/PageFormularios"));
const LinksHomePage = lazy(() => import("../pages/LinksHomePage"));
const LinksBlogPage = lazy(() => import("../pages/LinksBlogPage"));
const PostDetails = lazy(() => import("../pages/PostDetails"));
const LinksSettingsPage = lazy(() => import("../pages/LinksSettingsPage"));
const ErrorPage = lazy(() => import( "../pages/ErrorPage"));


function MyRoutes() {
  return (
    <Suspense fallback={<h1>Loading page...</h1>}>
      
      <Routes>
        <Route path="/" element={<MainReact/>}/>
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
        
      </Routes>
    </Suspense>
  )
}

export default MyRoutes