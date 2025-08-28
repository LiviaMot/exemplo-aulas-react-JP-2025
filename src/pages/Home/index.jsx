import './style.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <main>
        Meu conteúdo Batata

        <Link to='/about'>
          <button type="button">Navegar para Sobre</button>
        </Link>
      </main>
    </>
  )
}

export default Home