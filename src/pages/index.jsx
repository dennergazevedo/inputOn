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
import api from '../menu/api.json';
import { Helmet } from "react-helmet";

// ICONS
import {
  BsArrowDownShort
} from 'react-icons/bs';


export default function Home() {

  const [limit, setLimit] = useState(9);

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
                    !api[id].destaque?
                    <div key={id} hidden={Number(id) > Number(limit)}>
                      <Card id={id} api={api[id]}/>
                    </div>
                    :
                    null
                  }
                </>
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
