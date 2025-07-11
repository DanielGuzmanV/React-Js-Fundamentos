import MyRoutes from "./routes/Routes"
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div>
      
      {/* Scroll automatico */}
      <ScrollToTop/>
      <MyRoutes/>
      <hr/>

    </div>
  )
}

export default App
