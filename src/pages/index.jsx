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

// ICONS
import {
  BsArrowDownShort
} from 'react-icons/bs';

export default function Home() {

  const [limit, setLimit] = useState(9);
  const destaques = api.filter( item => item.destaque );

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
          {
            [...destaques.keys()].map(id => (
              <div>
                <Destaque key={id} id={id} />
              </div>
            ))
          }
        <ListCards>
          {
            [...api.keys()].map(id => (
                <>
                  {
                    !api[id].destaque?
                    <div key={id} hidden={Number(id) > Number(limit)}>
                      <Card id={id} />
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
