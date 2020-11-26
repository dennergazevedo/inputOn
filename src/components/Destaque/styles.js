import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    max-width: 90%;
    margin-bottom: 30px;

    @media only screen and (max-width: 800px){
        flex-direction: column;
    }
`;

export const Image = styled.img`
    width: 40%;
    height: auto;
    min-width: 300px;
`;

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 40%;
    padding: 40px;
    min-width: 300px;
`;

export const Title = styled.h1`
    font-size: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    color: ${props => props.theme.color};

    @media only screen and (max-width: 800px){
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 40px;
        text-align: center;
    }
`;

export const DestIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    padding: 5px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: ${props => props.theme.color};

    span{
        font-size: 12px;
        font-weight: 600;
        color: ${props => props.theme.background};
    }

    .icon{
        color: ${props => props.theme.background};
        margin-right: 5px;
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

    span{
        font-size: 10px;
        font-weight: 600;
        color: ${props => props.theme.background};
    }
`;