import { Link } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"

function LinksBlogPage() {
  return (
    <>
      <HeaderComponent/>
      <h2 style={{color: 'blue'}}>Blog page Links</h2>
      <ul>
      <h3>Lista del blog</h3>
        <li>
          <a href="https://www.youtube.com" target="_blank">Ir a youtube</a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank">Ir a google</a>
        </li>
      </ul>
    </>
  )
}

export default LinksBlogPage