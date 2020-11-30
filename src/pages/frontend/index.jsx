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
import { Helmet } from "react-helmet";

export default function Frontend() {

    const [limit, setLimit] = useState(9);

    let apiFront = [];

    function handleApiFront(){
        for(let i=0; i < api.length; i++){
            if(api[i].menu === 'FRONTEND'){
                apiFront.push(api[i]);
            }
        }
    }

    handleApiFront();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - FRONTEND</title>
                <link rel="canonical" href="https://www.inputon.com.br/frontend" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <FaPager className="icon"/>
                    <span>FRONTEND</span>
                </Title>
                <Subtitle>
                    <span>Posts sobre tecnologias de FRONTEND</span>
                </Subtitle>
            </Body>
            <ListCards>
                {
                    [...apiFront.keys()].map(id => (
                        <div key={id} hidden={Number(id) >= Number(limit)}>
                            <Card id={id} />
                        </div>
                    ))
                }
                </ListCards>

                {
                Number(limit) < Number(apiFront.length)?
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
