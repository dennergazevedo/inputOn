import React from 'react'
import { graphql } from 'gatsby'

// COMPONENTS
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardPedro from '../components/CardPedro'
import CardDenner from '../components/CardDenner'
import Comments from '../components/Comments'

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
  ListMenu
} from './styles'

// ICONS
import { FaBookmark } from 'react-icons/fa'

// ASSETS
import logo from '../assets/img/logo.png'

import api, { IItem } from '../menu/api';


const Template: React.FC<any> = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  let apiItem: IItem = {
    createdBy:'',
    createdLink: '',
    destaque: false,
    img: '',
    menu: '',
    title: '',
    url: '',
  };

  function handleApiFront() {
    for (let i = 0; i < api.length; i++) {
      if (api[i].url === frontmatter.slug) {
        apiItem = api[i]
      }
    }
  }

  handleApiFront()

  const config = {
    url: `https://www.inputon.com.br${frontmatter.slug}`,
    identifier: frontmatter.slug,
    title: frontmatter.title
  }

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
            <CreatedBy
              onClick={() => navigate(`/author/${apiItem.createdLink}`)}
            >
              <span>
                por <b>{apiItem.createdBy}</b>
              </span>
            </CreatedBy>
            <Date>
              <FaBookmark className="icon" /> POSTADO EM {frontmatter.date}
            </Date>
            <ListMenu>
                  {
                      Array.isArray(apiItem.menu)?
                      <>
                          {
                              [...apiItem.menu].map(id => (
                                  <MenuIcon key={id}>
                                      <span>{id}</span>
                                  </MenuIcon>
                              ))
                          }
                      </>
                      :
                      <MenuIcon>
                          <span>{apiItem.menu}</span>
                      </MenuIcon>
                  }
              </ListMenu>
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
        { apiItem.createdBy === "Denner Azevedo" && <CardDenner /> }
        { apiItem.createdBy === "Pedro Vasconcellos" && <CardPedro /> }
        <Comments config={config} />
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
export default Template;