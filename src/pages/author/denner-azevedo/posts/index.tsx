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

const DnrPosts: React.FC = () => {

    const [limit, setLimit] = useState<number>(9);

    let apiPosts: Array<IItem> = [];

    function handleApi(){
        for(let i=0; i < api.length; i++){
            if(api[i].createdBy === "Denner Azevedo"){
                apiPosts.push(api[i]);
            }
        }
    }
    handleApi();

    return (
        <Container>
            <Helmet>
                <meta charSet="utf-8" />
                <title>InputOn - Denner Azevedo</title>
                <link rel="canonical" href="https://www.inputon.com.br/author/denner-azevedo/posts" />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Body>
                <Title>
                    <CgUserlane className="icon"/>
                    <span>DENNER AZEVEDO</span>
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

export default DnrPosts;