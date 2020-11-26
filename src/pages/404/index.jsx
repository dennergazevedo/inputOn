import React from "react"

// STYLED COMPONENTS
import {
  Container,
  Body,
  Oops,
  NotFound,
  Button
} from './styles';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// STYLES GLOBAL
import { GlobalStyle } from '../../styles/global';

export default function Home() {

  return (
        <Container>
            <GlobalStyle />
            {
                typeof window !== 'undefined'?
                <Navbar />
                :
                null
            }
            <Body>
                <NotFound>
                    404
                </NotFound>
                <Oops>
                    Oops, página não encontrada!
                </Oops>
                <Button onClick={() => window.location.href="/"}>
                    Ir para Página Inicial
                </Button>
            </Body>
            <Footer />
        </Container>
  )
}
