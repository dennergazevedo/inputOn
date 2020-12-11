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

// COMPONENTS
import Carousel from '../Carousel';

// API
import api, { IItem } from '../../menu/api';
import { navigate } from 'gatsby';

export default function Destaque() {
    let apiItem: Array<IItem> = [];

    function handleSetDestaque() {
        for (let i = 0; i < api.length; i++) {
          if (api[i].destaque) {
            apiItem.push(api[i]);
          }
        }
      }

    handleSetDestaque();
    
    return (
        <Carousel title="Carousel">
            {
                apiItem &&
                [...apiItem.keys()].map(index => (
                    <Container>
                        <Image src={apiItem[index].img} alt="Imagem" onClick={() => navigate(`${apiItem[index].url}`)}/>
                        <Body>
                            <DestIcon>
                                <FaStar className="icon" />
                                <span>DESTAQUE</span>
                            </DestIcon>
                            <Title onClick={() => navigate(`${apiItem[index].url}`)}>
                                {apiItem[index].title}
                            </Title>
                            <CreatedBy onClick={() => navigate(`author/${apiItem[index].createdLink}`)}>
                                <span>por <b>{apiItem[index].createdBy}</b></span>
                            </CreatedBy>
                            <MenuIcon onClick={() => navigate(`/${apiItem[index].menu}`)}>
                                <span>{apiItem[index].menu}</span>
                            </MenuIcon>
                        </Body>
                    </Container>
                ))
            }
        </Carousel>
    )
}
