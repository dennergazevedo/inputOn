import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  max-width: 100vw;
  min-height: 100vh;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
  background-color: ${props => props.theme.background};
`;

export const Posts = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.primary};
    margin: 20px;
    cursor: pointer;
    font-weight: 700;

    .icon{
        margin-right: 10px;
        font-size: 14px;
    }

    &:hover{
        color: ${props => props.theme.color};
    }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80vw;
  min-width: 300px;
  height: auto;
  padding: 20px;
`;

export const ImageProfile = styled.img`
  width: 300px;
  height: auto;
  border-radius: 40px;
`;

export const Author = styled.h1`
  color: ${props => props.theme.color};
  font-size: 50px;
  margin-top: 20px;
  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 40px;
  }
`;

export const Social = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 40px;

  .icon {
    font-size: 24px;
    margin-left: 30px;
    margin-right: 30px;
    cursor: pointer;
    color: ${props => props.theme.color};
    transition: 0.5s all;

    &:hover {
      transition: 0.5s all;
      color: ${props => props.theme.primary};
    }
  }
`;

export const Subtitle = styled.span`
  font-size: 24px;
  color: ${props => props.theme.color};
  text-align: center;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 40px;

  a {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
