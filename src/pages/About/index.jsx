import './style.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <>
      <h1>Pagina Sobre</h1>

      <Link to='/'>
        <button type="button">Navegar para Home</button>
      </Link>
    </>
  )
}

export default About