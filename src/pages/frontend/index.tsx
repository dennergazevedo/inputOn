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
} from './styles'

// ICONS
import {
    FaPager,
} from 'react-icons/fa';
import {
    BsArrowDownShort
} from 'react-icons/bs';

// API
import api, { IItem } from '../../menu/api';
import { Helmet } from "react-helmet";

const Frontend: React.FC = () => {

    const [limit, setLimit] = useState<number>(9);

    let apiFront: Array<IItem> = [];

    function handleApiFront(){
        for(let i=0; i < api.length; i++){
            if(api[i].menu.indexOf("FRONTEND", 0) !== -1){
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
                        <div key={id} hidden={id >= limit}>
                            <Card api={apiFront[id]}/>
                        </div>
                    ))
                }
                </ListCards>

                {
                limit < apiFront.length?
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

export default Frontend;