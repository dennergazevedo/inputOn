import React from "react"

// STYLED COMPONENTS
import {
  Container
} from './styles';

// COMPONENTS
import Navbar from '../components/Navbar';
import { GlobalStyle } from '../styles/global';

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Navbar />
    </Container>
  )
}
