/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';

// STYLED COMPONENTS
import {
    Container,
    Image,
    Body,
    Title,
    CreatedBy,
    MenuIcon,
    ListMenu
} from './styles';

export default function Card(props) {
    const [api, setApi] = useState(props.api);

    useEffect(()=>{
        setApi(props.api)
    }, [props.api])

    return (
        <Container onClick={() => navigate(`${api.url}`)}>
            <Image src={api.img} alt="Imagem" />
            <Title>
                {api.title}
            </Title>
            <Body>
                <CreatedBy onClick={() => navigate(`author/${api.createdLink}`)}>
                    <span>por <b>{api.createdBy}</b></span>
                </CreatedBy>
                <ListMenu>
                    {
                        Array.isArray(api.menu)?
                        <>
                            {
                                [...api.menu].map(id => (
                                    <MenuIcon key={id}>
                                        <span>{id}</span>
                                    </MenuIcon>
                                ))
                            }
                        </>
                        :
                        <MenuIcon>
                            <span>{api.menu}</span>
                        </MenuIcon>
                    }
                </ListMenu>
                
            </Body>
        </Container>
    )
}
