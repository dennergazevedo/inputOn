import React, { useState } from 'react'

// COMPONENTS
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import Card from '../../../../components/Card';

// STYLES GLOBAL
import { GlobalStyle } from '../../../../styles/global';

// STYLED COMPONENTS
import {
    Container,
    Body,
    Title,
    ListCards,
    DivNextPage,
    MoreItems,
    Posts,
} from './styles'

// ICONS
import {
    CgUserlane,
} from 'react-icons/cg';
import {
    BsArrowDownShort
} from 'react-icons/bs';
import {
    FaBookmark
} from 'react-icons/fa';

// API
import api, { IItem } from '../../../../menu/api';
import { Helmet } from "react-helmet";

const PdvPosts: React.FC = () => {

    const [limit, setLimit] = useState<number>(9);

    let apiPosts: Array<IItem> = [];

    function handleApi(){
        for(let i=0; i < api.length; i++){
            if(api[i].createdBy === "Pedro Vasconcellos"){
                apiPosts.push(api[i]);
            }
        }
    }
    handleApi();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Pedro Vasconcellos</title>
                <link rel="canonical" href="https://www.inputon.com.br/author/pedro-vasconcelos/posts" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <CgUserlane className="icon"/>
                    <span>PEDRO VASCONCELOS</span>
                </Title>
                <Posts>
                    <FaBookmark className="icon"/>
                    <span>{apiPosts.length} POSTS</span>
                </Posts>
            </Body>
            <ListCards>
                {
                    apiPosts &&
                    [...apiPosts.keys()].map(id => (
                        <div key={id} hidden={id >= limit}>
                            <Card api={apiPosts[id]}/>
                        </div>
                    ))
                }
            </ListCards>

            {
                limit < apiPosts.length?
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

export default PdvPosts;