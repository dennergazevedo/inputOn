import React from 'react'

// STYLED COMPONENTS
import {
    Container
} from './styles.js';

// COMPONENTS
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { GlobalStyle } from '../../styles/global';

export default function About() {
    return (
        <Container>
            <GlobalStyle />
            <Navbar />
            <Footer />
        </Container>
    )
}
