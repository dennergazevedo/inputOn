import React from 'react';

// STYLED COMPONENTS
import {
    Container,
    Image,
    Body,
    DestIcon,
    Title,
    CreatedBy,
    MenuIcon
} from './styles';

// ICONS
import {
    FaStar
} from 'react-icons/fa';

// API
import api from '../../menu/api.json';
import { navigate } from 'gatsby';

export default function Destaque(props) {
    let apiItem;

    function handleSetDestaque() {
        for (let i = 0; i < api.length; i++) {
          if (api[i].destaque) {
            apiItem = api[i];
            break;
          }
        }
      }

    handleSetDestaque();
    
    return (
        <Container>
            <Image src={apiItem.img} alt="Imagem" onClick={() => navigate(`${apiItem.url}`)}/>
            <Body>
                <DestIcon>
                    <FaStar className="icon" />
                    <span>DESTAQUE</span>
                </DestIcon>
                <Title onClick={() => navigate(`${apiItem.url}`)}>
                    {apiItem.title}
                </Title>
                <CreatedBy onClick={() => navigate(`author/${apiItem.createdLink}`)}>
                    <span>por <b>{apiItem.createdBy}</b></span>
                </CreatedBy>
                <MenuIcon onClick={() => navigate(`${(apiItem.menu).toLowerCase()}`)}>
                    <span>{apiItem.menu}</span>
                </MenuIcon>
            </Body>
        </Container>
    )
}
