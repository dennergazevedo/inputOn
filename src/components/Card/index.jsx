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

export default function Card(props) {
    return (
        <Container onClick={() => navigate(`${props.api.url}`)}>
            <Image src={props.api.img} alt="Imagem" />
            <Title>
                {props.api.title}
            </Title>
            <Body>
                <CreatedBy onClick={() => navigate(`author/${props.api.createdLink}`)}>
                    <span>por <b>{props.api.createdBy}</b></span>
                </CreatedBy>
                <MenuIcon>
                    <span>{props.api.menu}</span>
                </MenuIcon>
            </Body>
        </Container>
    )
}
