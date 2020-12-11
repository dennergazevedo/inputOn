import React from 'react'
import { navigate } from 'gatsby'

// STYLED COMPONENTS
import { Container, Photo } from './styles'

// ASSETS
import photo from '../../assets/img/author-pedro-vasconcellos.jpg'

const CardPedro: React.FC = () => {
  return (
    <Container onClick={() => navigate('/author/pedro-vasconcellos')}>
      <Photo src={photo} alt="Pedro Vasconcellos" />
      <div>
        <span className="name">PEDRO VASCONCELLOS</span>
        <span>
          Entusiasta de tecnologia (e dos games)!
          <br />
          Escreva na pele pra não esquecer:
          <br />
          <br />
          <i>'Nunca deixe o medo te afetar negativamente.'</i>
        </span>
      </div>
    </Container>
  )
}
export default CardPedro;