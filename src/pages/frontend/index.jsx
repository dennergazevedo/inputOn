import React, { useState } from 'react'

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

// STYLES GLOBAL
import { GlobalStyle } from '../../styles/global';

// STYLED COMPONENTS
import {
    Container,
    Body,
    Title,
    Subtitle,
    ListCards,
    DivNextPage,
    MoreItems
} from './styles.js'

// ICONS
import {
    FaPager,
} from 'react-icons/fa';
import {
    BsArrowDownShort
} from 'react-icons/bs';

// API
import api from '../../menu/api.json';

export default function Frontend() {

    const [limit, setLimit] = useState(10);

    return (
        <Container>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <FaPager className="icon"/>
                    <span>FRONTEND</span>
                </Title>
                <Subtitle>
                    <span>Podemos classificar como <b>FRONTEND</b> toda parte visual do site, tudo aquilo que conseguimos interagir como usuário comum.
                    O dev frontend é responsável por desenvolver por meio de código uma interface gráfica agradável para o cliente interagir da melhor
                    forma possível. E não, um dev frontend não é um Designer (mas este tipo de conhecimento pode ajudar bastante).</span>
                </Subtitle>
            </Body>
            <ListCards>
                {
                    [...api.keys()].map(id => (
                         <div key={id} hidden={api[id].menu !== 'FRONTEND'}>
                             <Card id={id} />
                         </div>
                    ))
                }
                </ListCards>

                {
                Number(limit) < Number(api.length)?
                <DivNextPage onClick={() => setLimit(Number(limit) + Number(9))}>
                    <MoreItems>
                    <BsArrowDownShort className="icon"/>
                    </MoreItems>
                </DivNextPage>
                :
                null
                }
            <Footer />
        </Container>
    )
}
