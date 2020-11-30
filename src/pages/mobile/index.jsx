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
    FaMobileAlt,
} from 'react-icons/fa';
import {
    BsArrowDownShort
} from 'react-icons/bs';

// API
import api from '../../menu/api.json';

export default function Mobile() {

    const [limit, setLimit] = useState(9);

    let apiFront = [];

    function handleApiFront(){
        for(let i=0; i < api.length; i++){
            if(api[i].menu === 'MOBILE'){
                apiFront.push(api[i]);
            }
        }
    }

    handleApiFront();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Mobile</title>
                <link rel="canonical" href="https://www.inputon.com.br/mobile" />
            </Helmet>
                    <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <FaMobileAlt className="icon"/>
                    <span>MOBILE</span>
                </Title>
                <Subtitle>
                    <span>Posts sobre tecnologias de Mobile</span>
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
