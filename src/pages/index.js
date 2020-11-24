import React from "react"

// STYLED COMPONENTS
import {
  Container
} from './styles';

// COMPONENTS
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { GlobalStyle } from '../styles/global';

import { useTheme } from '../contexts/theme';

export default function Home() {
  const { toggleTheme } = useTheme(); 

  return (
    <Container>
      <GlobalStyle />
      <Navbar />
      <button onClick={toggleTheme}>useTheme</button>
      <Footer />
    </Container>
  )
}
