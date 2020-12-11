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
} from './styles'

// ICONS
import {
    FaDatabase,
} from 'react-icons/fa';
import {
    BsArrowDownShort
} from 'react-icons/bs';

// API
import api, { IItem } from '../../menu/api';

const Backend: React.FC = () => {

    const [limit, setLimit] = useState<number>(9);

    let apiBack: Array<IItem> = [];

    function handleApiBackend(){
        for(let i=0; i < api.length; i++){
            if(api[i].menu.indexOf("BACKEND", 0) !== -1){
                apiBack.push(api[i]);
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
                    [...apiBack.keys()].map(id => (
                        <div key={id} hidden={id >= limit}>
                            <Card api={apiBack[id]} />
                        </div>
                    ))
                }
                </ListCards>

                {
                limit < apiBack.length?
                <DivNextPage onClick={() => setLimit(limit + 9)}>
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

export default Backend;