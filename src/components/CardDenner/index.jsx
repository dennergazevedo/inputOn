import React from 'react'
import { navigate } from 'gatsby';

// STYLED COMPONENTS
import {
    Container,
    Photo
} from './styles.js'

// ASSETS
import photo from '../../assets/img/author-denner-azevedo.jpg';

export default function CardDenner() {
    return (
        <Container onClick={() => navigate('/author/denner-azevedo')}>
            <Photo src={photo} alt="Denner Azevedo" />
            <div>
                <span className="name">DENNER AZEVEDO</span>
                <span>Dev entusiasta de tecnologia & design! Trace suas metas, busque seu melhor e lembre-se:<br/><br/><i>'Sempre há um próximo passo'</i>.</span>
            </div>
        </Container>
    )
}
