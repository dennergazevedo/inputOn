import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    max-width: 100vw;
    min-height: 100vh;
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
    height: auto;
    justify-content: center;
    align-items: center;
`;