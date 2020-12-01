import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 100vw;
    min-height: 100vh;
    height: 100%;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background}
`;

export const ListCards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80vw;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
`;

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-3px);
    }
    100% {
        transform: translatey(0px);
    }
`;


export const DivNextPage = styled.div`
    display: flex;
    width: 80px;
    height: 80px;
    justify-content: center;
    align-items: center;
    margin: 30px;
`;

export const MoreItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.theme.color};
    transition: 0.5s all;
    cursor: pointer;
    margin-top: 30px;
    box-shadow: 2px 2px 10px #3335;

    &:hover{
        transition: 0.5s all;
        background-color: ${props => props.theme.primary};
    }
    
    .icon{
        color: ${props => props.theme.background};
        font-size: 24px;
        transform: translatey(0px);
	    animation: 1s ${float} ease-in-out infinite;
    }
`;