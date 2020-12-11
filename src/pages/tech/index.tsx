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
    GiTechnoHeart,
} from 'react-icons/gi';
import {
    BsArrowDownShort
} from 'react-icons/bs';

// API
import api, { IItem } from '../../menu/api';

const Tech: React.FC = () => {

    const [limit, setLimit] = useState<number>(8);

    let apiTech: Array<IItem> = [];

    function handleapiTech(){
        for(let i=0; i < api.length; i++){
            if(api[i].menu.indexOf("TECH", 0) !== -1){
                apiTech.push(api[i]);
            }
        }
    }

    handleapiTech();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Tech</title>
                <link rel="canonical" href="https://www.inputon.com.br/mobile" />
            </Helmet>
                    <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <GiTechnoHeart className="icon"/>
                    <span>TECH</span>
                </Title>
                <Subtitle>
                    <span>Posts sobre tecnologias</span>
                </Subtitle>
            </Body>
            <ListCards>
                {
                    [...apiTech.keys()].map(id => (
                        <div key={id} hidden={id >= limit}>
                            <Card api={apiTech[id]}/>
                        </div>
                    ))
                }
                </ListCards>

                {
                limit < apiTech.length?
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

export default Tech;