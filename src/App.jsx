import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import List from './components/List copy'
import Images from './components/Images'
import Form from './components/Form'

function App() {
  return (
    <>
      {/* Cabeçalho */}
      {/* Esse é o jeito certo de colocar */}
      <Header />

      <List titulo="Btata" exibirPrimeiraLista={true}/>
      <List titulo="Aipim" />

      {/* Conteúdo da página */}
      <main>
        {/* Listas */}
        <List />
        {/* Imagens e Videos */}
        <Images />
        {/* Form */}
        <Form />
      </main>

      {/* Rodapé */}
      <Footer />
    </>
  )
}

export default App