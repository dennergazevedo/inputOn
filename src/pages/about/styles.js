import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100vw;
    max-width: 100vw;
    background-color: ${props => props.theme.primary};
`;