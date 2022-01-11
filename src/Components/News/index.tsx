import { Container } from './styles'

import heartSvg from '../../assets/heart.svg'

interface NewsProps {
  title: string
}

function News(props:NewsProps) {
  return (
    <Container>
      <div>
        <span>11 de Janeiro, 2022</span>
        <img src={heartSvg} alt="Heart" />
      </div>
      <h1>{props.title}</h1>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</p>
    </Container>
  )
}

export default News
