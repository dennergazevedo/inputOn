import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    height: 500px;
    min-width: 300px;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${props => props.theme.color}5;
    background-color: ${props => props.theme.background};
    margin: 20px;
    cursor: pointer;
    transition: 0.5s all;

    &:hover{
        transition: 0.5s all;
        transform: translateY(-20px);
    }

    @media only screen and (max-width: 800px){
        height: auto;
        margin-bottom: 40px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    min-width: 300px;
`;

export const ListMenu = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 90%;
    padding: 30px;
    min-width: 280px;
`;

export const Title = styled.h1`
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 40px;
    margin-right: 40px;
    color: ${props => props.theme.color};

    @media only screen and (max-width: 800px){
        margin-top: 25px;
        margin-bottom: 10px;
        margin-left: 25px;
        margin-right: 25px;
        font-size: 25px;
        text-align: center;
    }
`;

export const CreatedBy = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.color};
`;

export const MenuIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${props => props.theme.color};
    margin-top: 20px;
    margin-right: 10px;
    

    span{
        font-size: 10px;
        font-weight: 600;
        color: ${props => props.theme.background};
        transition: 0.5s all;
    }
`;