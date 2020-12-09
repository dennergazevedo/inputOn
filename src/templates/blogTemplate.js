import React from 'react'
import { graphql } from 'gatsby'

// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardPedro from '../components/CardPedro'

// SERVICES
import { navigate } from 'gatsby'

// STYLES GLOBAL
import { GlobalStyle } from '../styles/global'
import { Helmet } from 'react-helmet'

// STYLED COMPONENTS
import {
  Container,
  Body,
  Title,
  Imagem,
  CreatedBy,
  MenuIcon,
  TitleText,
  Text,
  Date,
  Logo,
  BodyLogo,
  Logomarca,
} from './styles.js'

// ICONS
import { FaBookmark } from 'react-icons/fa'

// ASSETS
import logo from '../assets/img/logo.png'

import api from '../menu/api.json';

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  let apiItem;

  function handleApiFront(){
      for(let i=0; i < api.length; i++){
          if(api[i].url === frontmatter.slug){
              apiItem = api[i];
          }
      }
  }

  handleApiFront();

  return (
    <Container>
      <Helmet>
        <meta charSet="utf-8" />
        <title>InputOn - {frontmatter.title}</title>
        <link rel="canonical" href="https://www.inputon.com.br/ux-ui-design" />
      </Helmet>
      <GlobalStyle />
      <Navbar />
      <Body>
        <Title>
          <Imagem src={apiItem.img} alt={apiItem.title} />
          <div className="titleRight">
            <TitleText>{frontmatter.title}</TitleText>
            <CreatedBy onClick={() => navigate(`/author/denner-azevedo`)}>
              <span>
                    por <b>{apiItem.createdBy}</b>
              </span>
            </CreatedBy>
            <Date>
              <FaBookmark className="icon" /> POSTADO EM {frontmatter.date}
            </Date>
            <MenuIcon>
              <span>FRONTEND</span>
            </MenuIcon>
          </div>
        </Title>
        <Text
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <Logo>
          <Logomarca src={logo} alt="Logo" />
          <BodyLogo>
            <span>POWERED BY</span>
            <span className="title">
              Input
              <b>On</b>
            </span>
          </BodyLogo>
        </Logo>

        <CardPedro />
      </Body>
      <Footer />
    </Container>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
