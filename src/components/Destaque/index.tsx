import React, { useState } from 'react';
import { useSwipeable } from "react-swipeable";

// STYLED COMPONENTS
import {
    Carousel,
    Container,
    Imagem,
    Describe,
    Title,
    CreatedBy,
    ListTag,
    Tag,
    ButtonNext,
    ButtonBack,
} from './styles';

// ICONS
import {
    IoIosArrowForward,
    IoIosArrowBack
} from 'react-icons/io';

// API
import api, { IItem } from '../../menu/api';
import { navigate } from 'gatsby';

const Destaque: React.FC = () => {
    let apiItem: Array<IItem> = [];
    const [sliding, setSliding] = useState<number>(0);
    const [dir, setDir] = useState('NEXT');

    const handlers = useSwipeable({
        onSwipedLeft: () => handleNext(),
        onSwipedRight: () => handleBack(),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
      });

    function handleSetDestaque() {
        for (let i = 0; i < api.length; i++) {
          if (api[i].destaque) {
            apiItem.push(api[i]);
          }
        }
      }

    handleSetDestaque();

    function handleNext(){
        if(sliding !== apiItem.length - 1){
            setSliding(sliding + 1);
        }else{
            setSliding(0);
        }
    }

    function handleBack(){
        if(sliding !== 0){
            setSliding(sliding - 1);
        }else{
            setSliding(apiItem.length - 1);
        }
    }
    
    return (
        <Carousel {...handlers} style={{cursor:'grab'}}>
            {
                [...apiItem.keys()].map(id => (
                    <Container sliding={sliding} dir={dir}>
                        <Imagem onClick={() => navigate(`${apiItem[id].url}`)} src={apiItem[id].img} alt={apiItem[id].title} />
                        <Describe>
                            <Title onClick={() => navigate(`${apiItem[id].url}`)}>{apiItem[id].title}</Title>
                            <CreatedBy onClick={() => navigate(`/author/${String(apiItem[id].createdLink).toLowerCase()}`)}>
                                por <b>{apiItem[id].createdBy}</b>
                            </CreatedBy>
                            <ListTag>
                                {
                                    Array.isArray(apiItem[id].menu)?
                                    <>
                                        {
                                            [...apiItem[id].menu].map(id => (
                                                <Tag key={id} onClick={() => navigate(`/${id.toLowerCase()}`)}>
                                                    <span>{id}</span>
                                                </Tag>
                                            ))
                                        }
                                    </>
                                    :
                                    <Tag onClick={() => navigate(`/${String(apiItem[id].menu).toLowerCase()}`)}>
                                        <span>{apiItem[id].menu}</span>
                                    </Tag>
                                }
                            </ListTag>
                        </Describe>
                    </Container>
                ))
            }
            {
                apiItem.length >= 1 && 
                <>
                    <ButtonNext>
                        <IoIosArrowForward onClick={handleNext} className="icon"/>
                    </ButtonNext>
                    <ButtonBack>
                        <IoIosArrowBack onClick={handleBack} className="icon"/>
                    </ButtonBack>
                </>
            }
        </Carousel>
    )
}
export default Destaque;