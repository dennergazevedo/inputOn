import styled from 'styled-components';

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: auto;
    margin-top: 10px;
    margin-bottom: 100px;
    overflow: hidden;

    *{
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;

interface IContainerProps {
    sliding: number;
    dir: string;
}

export const Container = styled.div<IContainerProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    height: auto;
    cursor: grab;
    transition: transform 1s ease;
    transform: ${props => (props.sliding ? `translateX(calc(-100vw * ${props.sliding}))` : `translateX(0%)`)};

    @media only screen and (max-width: 1000px){
        flex-direction: column;
    }
`;

export const Imagem = styled.img`
    height: auto;
    width: 700px;
    cursor: pointer;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        transform: scale(1.03);
    }
`;

export const Describe = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 40%;
    padding: 30px;
    cursor: grab;

    @media only screen and (max-width: 1000px){
        width: 90%;
        min-width: 350px;
    }
`;

export const Title = styled.span`
    color: ${props => props.theme.color};
    font-size: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s all;

    @media only screen and (max-width: 600px){
        font-size: 40px;
    }

    &:hover{
        transition: 0.5s all;
        color: ${props => props.theme.primary};
    }
`;

export const CreatedBy = styled.span`
    color: ${props => props.theme.color};
    margin-top: 50px;
    

    b{
        cursor: pointer;
        transition: 0.5s all;

        &:hover{
            transition: 0.5s all;
            color: ${props => props.theme.primary};
        }
    }
`;

export const ListTag = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const Tag = styled.span`
    color: ${props => props.theme.background};
    background-color: ${props => props.theme.color};
    padding: 5px 20px;
    font-weight: 600;
    font-size: 12px;
    border-radius: 50px;
    margin-right: 20px;
    cursor: pointer;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        background-color: ${props => props.theme.primary};
    }
`;

export const ButtonNext = styled.span`
    display: flex;
    position: absolute;
    right: 20px;
    font-size: 50px;
    color: ${props => props.theme.color}5;
    padding: 0;

    @media only screen and (max-width: 600px){
        font-size: 30px;
        right: 10px;
    }

    .icon{
        cursor: pointer;

        &:hover{
            color: ${props => props.theme.color}8;
        }
    }
`;

export const ButtonBack = styled.span`
    display: flex;
    position: absolute;
    left: 20px;
    font-size: 50px;
    color: ${props => props.theme.color}5;
    padding: 0;

    @media only screen and (max-width: 600px){
        font-size: 30px;
        left: 10px;
    }

    .icon{
        cursor: pointer;
    }

    &:hover{
        color: ${props => props.theme.color}8;
    }
`;