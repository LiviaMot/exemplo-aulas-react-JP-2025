import './style.css'

function List({ titulo, exibirPrimeiraLista }) {
  return (
    <section>
      <h2 id="exemplo-h2">Seção de Listas:</h2>
      { exibirPrimeiraLista ? <>exibir primeira lista</> : null }
      <h3>Lista não ordenada</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>

      <h3>Lista ordenada</h3>
      <ol>
        <li>Primeiro Item</li>
        <li>Segundo Item</li>
        <li>Terceiro Item</li>
      </ol>
    </section>
  )
}

export default List