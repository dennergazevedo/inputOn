/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */

import React, { useState } from "react"

// STYLED COMPONENTS
import {
  Container,
  ListCards,
  MoreItems,
  DivNextPage
} from './styles';

// COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Destaque from '../components/Destaque';
import Card from '../components/Card';

// STYLES GLOBAL
import { GlobalStyle } from '../styles/global';

// SERVICES
import api from '../menu/api';
import { Helmet } from "react-helmet";

// ICONS
import {
  BsArrowDownShort
} from 'react-icons/bs';


 const Home: React.FC = () => {

  const [limit, setLimit] = useState<number>(9);

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>InputOn - Homepage</title>
        <link rel="canonical" href="https://www.inputon.com.br" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
        <Destaque />
        <ListCards>
          {
            [...api.keys()].map(id => (
                <>
                  {
                    !api[id].destaque &&
                    <div hidden={id > limit}>
                      <Card api={api[id]}/>
                    </div>
                  }
                </>
            ))
          }
        </ListCards>

        {
          limit < api.length?
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

export default Home;