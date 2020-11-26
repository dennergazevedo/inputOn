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

const float = keyframes`
    0% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-20px);
    }
    100% {
        transform: translatey(0px);
    }
`;

export const NotFound = styled.div`
    color: ${props => props.theme.color};
    font-size: 250px;
    font-weight: 700;
    transform: translatey(0px);
	animation: 6s ${float} ease-in-out infinite;

    @media only screen and (max-width: 800px){
        font-size: 150px;
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