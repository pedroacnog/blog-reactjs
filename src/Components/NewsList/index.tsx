import { Container } from './styles'

import News from '../News'

function NewsList() {
  return (
    <Container>
      <News title="Agora é oficial: o Windows 11 está vindo"/>
      <News title="Tim Berners-Lee vai leiloar código-fonte da web"/>
      <News title="Tem Firefox novo no pedaço e você vai querer migrar"/>
      <News title="John McAfee, criador do antivírus McAfee, morre"/>
    </Container>
  )
}

export default NewsList
