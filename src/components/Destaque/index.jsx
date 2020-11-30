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
    return (
        <Container>
            <Image src={api[props.id].img} alt="Imagem" onClick={() => navigate(`${api[props.id].url}`)}/>
            <Body>
                <DestIcon>
                    <FaStar className="icon" />
                    <span>DESTAQUE</span>
                </DestIcon>
                <Title>
                    {api[props.id].title}
                </Title>
                <CreatedBy>
                    <span>por <b>{api[props.id].createdBy}</b></span>
                </CreatedBy>
                <MenuIcon onClick={() => navigate(`${(api[props.id].menu).toLowerCase()}`)}>
                    <span>{api[props.id].menu}</span>
                </MenuIcon>
            </Body>
        </Container>
    )
}
