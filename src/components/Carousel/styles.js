import styled from "styled-components";

export const NEXT = "NEXT";
export const PREV = "PREV";

export const Item = styled.div`
  text-align: center;
  padding: 100px;
  background-image: ${props => `url(${props.img})`};
  background-size: cover;
`;

export const CarouselContainer = styled.div`
  display: flex;
  transition: ${props => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${props => {
        if (!props.sliding) return "translateX(calc(-80% - 20px))";
        if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
        return "translateX(0%)";
    }};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
`;

export const ButtonLeft = styled.div`
  display: flex;
  position: absolute;
  left: 20px;
  font-size: 50px;
  font-weight: 600;

  .icon{
    cursor: pointer;
    color: #3332;

    &:hover{
      color: #3335;
    }
  }
`;

export const ButtonRight = styled.div`
  display: flex;
  position: absolute;
  right: 20px;
  font-size: 50px;
  font-weight: 600;

  .icon{
    cursor: pointer;
    color: #3332;

    &:hover{
      color: #3335;
    }
  }
`;


export const CarouselSlot = styled.div`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${props => props.order};
`;

export const SlideButton = styled.button`
  color: #ffffff;
  font-family: Open Sans;
  font-size: 16px;
  font-weight: 100;
  padding: 10px;
  background-color: #f66f3e;
  border: 1px solid white;
  text-decoration: none;
  cursor: pointer;
  margin-top: 20px;
  text-decoration: none;
  float: ${props => props.float};

  &:active {
    position: relative;
    top: 1px;
  }
  &:focus {
    outline: 0;
  }
`;

export const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
  width: 75%;
`;

export const ExtraInfo = styled.div`
  margin-top: 25px;
  display: inline-block;
`;

export const Code = styled.code`
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  margin: 0;
  padding: 0.2em 0.4em;
`;
