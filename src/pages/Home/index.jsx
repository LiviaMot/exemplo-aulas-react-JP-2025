import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Header />
      <Header titulo={"Página sobre nós"} />

      <main>
        Meu conteúdo Batata
      </main>

      <Footer />
    </>
  )
}

export default Home