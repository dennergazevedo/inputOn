import React, { useState } from 'react'

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

// STYLES GLOBAL
import { GlobalStyle } from '../../styles/global';
import { Helmet } from "react-helmet";

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
    FaDatabase,
} from 'react-icons/fa';
import {
    BsArrowDownShort
} from 'react-icons/bs';

// API
import api from '../../menu/api.json';

export default function Backend() {

    const [limit, setLimit] = useState(9);

    let apiFront = [];

    function handleApiBackend(){
        for(let i=0; i < api.length; i++){
            if(api[i].menu === 'BACKEND'){
                apiFront.push(api[i]);
            }
        }
    }

    handleApiBackend();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - BACKEND</title>
                <link rel="canonical" href="https://www.inputon.com.br/backend" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <FaDatabase className="icon"/>
                    <span>BACKEND</span>
                </Title>
                <Subtitle>
                    <span>Posts sobre tecnologias de Backend</span>
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
