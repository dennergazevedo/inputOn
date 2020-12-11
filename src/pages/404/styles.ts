import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 100vw;
    min-height: 100vh;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.background};
`;

export const Logo = styled.div`
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 5px;
`;

export const BodyLogo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    
    span{
        color: ${props => props.theme.color};
        font-size: 12px;
    }

    .title{
        font-size: 50px;
        font-weight: 600;
        color: ${props => props.theme.primary};

        b{
            color: ${props => props.theme.color};
        }
    }
`;

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-30px);
    }
    100% {
        transform: translatey(0px);
    }
`;

export const Logomarca = styled.img`
    width: 200px;
    height: auto;
    transition: 0.5s all;
    transform: translatey(0px);
    animation: 2s ${float} ease-in-out infinite;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    margin-bottom: 50px;
    margin-top: 50px;
`;

export const Oops = styled.div`
    color: ${props => props.theme.color};
    font-size: 50px;

    @media only screen and (max-width: 800px){
        font-size: 30px;
        text-align: center;
    }
`;

export const Button = styled.button`
    padding: 10px;
    padding-left: 50px;
    padding-right: 50px;
    background-color: ${props => props.theme.color};
    color: ${props => props.theme.background};
    margin-top: 50px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
`;