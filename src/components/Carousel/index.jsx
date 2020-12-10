/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import {
  Wrapper,
  CarouselContainer,
  CarouselSlot,
  PREV,
  NEXT,
  ButtonLeft,
  ButtonRight
} from "./styles";

// ICONS
import {
  IoIosArrowBack,
  IoIosArrowForward
} from 'react-icons/io';

const getOrder = ({ index, pos, numItems }) => {
  return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};
const initialState = { pos: 0, sliding: false, dir: NEXT };

const Carousel = props => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const numItems = React.Children.count(props.children);

  const slide = dir => {
    dispatch({ type: dir, numItems });
    setTimeout(() => {
      dispatch({ type: "stopSliding" });
    }, 50);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => slide(NEXT),
    onSwipedRight: () => slide(PREV),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  function handleLoop(){
    slide(NEXT);
    setTimeout(function(){
      handleLoop();
    }, 7000);
  }

  useEffect(()=>{
    handleLoop();
  }, []);

  return (
    <div {...handlers} style={{cursor:'grab'}}>
      <Wrapper>
        <CarouselContainer dir={state.dir} sliding={state.sliding}>
          {React.Children.map(props.children, (child, index) => (
            <CarouselSlot
              key={index}
              order={getOrder({ index: index, pos: state.pos, numItems })}
            >
              {child}
            </CarouselSlot>
          ))}
        </CarouselContainer>
        <ButtonLeft>
          <IoIosArrowBack className="icon" onClick={() => slide(PREV)} float="left"/>
        </ButtonLeft>
        <ButtonRight>
          <IoIosArrowForward className="icon" onClick={() => slide(NEXT)} float="right"/>
        </ButtonRight>
      </Wrapper>
    </div>
  );
};

function reducer(state, { type, numItems }) {
  switch (type) {
    case "reset":
      return initialState;
    case PREV:
      return {
        ...state,
        dir: PREV,
        sliding: true,
        pos: state.pos === 0 ? numItems - 1 : state.pos - 1
      };
    case NEXT:
      return {
        ...state,
        dir: NEXT,
        sliding: true,
        pos: state.pos === numItems - 1 ? 0 : state.pos + 1
      };
    case "stopSliding":
      return { ...state, sliding: false };
    default:
      return state;
  }
}

export default Carousel;
