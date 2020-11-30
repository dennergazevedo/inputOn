/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { navigate } from 'gatsby';

// STYLED COMPONENTS
import {
    Container,
    Image,
    Body,
    Title,
    CreatedBy,
    MenuIcon
} from './styles';

// API
import api from '../../menu/api.json';

export default function Card(props) {
    return (
        <Container onClick={() => navigate(`${api[props.id].url}`)}>
            <Image src={api[props.id].img} alt="Imagem" />
            <Title>
                {api[props.id].title}
            </Title>
            <Body>
                <CreatedBy onClick={() => navigate(`/author/${api[props.id].createdLink}`)}>
                    <span>por <b>{api[props.id].createdBy}</b></span>
                </CreatedBy>
                <MenuIcon>
                    <span>{api[props.id].menu}</span>
                </MenuIcon>
            </Body>
        </Container>
    )
}
