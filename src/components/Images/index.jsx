import './style.css'

function Images() {
  return (
    <section>
      <h2>Imagens e Vídeos</h2>
      <h3>Imagem</h3>
      <figure>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYyzNmwy56qnPANHsrxsAQrsyWMNU7BSW-zA&s" alt="Imagem de um cachorro na praia" width="450" />
      </figure>

      <h3>Vídeo</h3>
      <iframe width="367" height="650" src="https://www.youtube.com/embed/Axe2-eeq2qI" title="JOTAPÊ CONVIDOU ESSE INICIANTE PRA FAZER DUPLA! #batalhaderima" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </section>
  )
}

export default Images