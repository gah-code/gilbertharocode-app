import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// import "./card.scss"

const StyledArticle = styled.article`
  color: #fff;
  padding: 2rem;
  max-width: 25.22222rem;
  background: #252525;
  position: relative;
  border-radius: 10px;
  box-shadow: none;

  transition: transform 300ms ease-in-out, box-shadow 400ms ease,
    background 100ms ease;

  [data-interactive]:hover,
  [data-interactive]:focus-within {
    background: #111111;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.5rem);
  }

  > * + * {
    margin-top: 1em;
  }

  .breakout-button {
    font: inherit;
    font-weight: 600;
    padding: 0.6rem 2rem;
    background: transparent;
    color: currentcolor;
    border: 1px solid;
    transition: background 100ms ease;
    position: static;
  }

  .breakout-button,
  .breakout-button::before {
    cursor: pointer;
  }

  .breakout-button::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .breakout-button:focus {
    outline: none;
  }

  .breakout-button:hover {
    background: #333333;
  }

  .breakout-button:focus::before {
    outline: 1px solid #ffffff;
    outline-offset: -0.8rem;
  }

  :not([data-interactive]) > .breakout-button::before {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  /* padding: 8rem 2.5rem; */
  /* background-color: ; */
`;

const Card = ({ data }) => {
  const cardWidth = 300;
  const [scrollX, setScrollX] = React.useState(0);

  const handlePrev = () => {
    const newX = scrollX + cardWidth;
    if (newX > 0) {
      setScrollX(0);
    } else {
      setScrollX(newX);
    }
  };

  const handleNext = () => {
    const newX = scrollX - cardWidth;
    const maxScrollX = -(data.length * cardWidth) + window.innerWidth;
    if (newX < maxScrollX) {
      setScrollX(maxScrollX);
    } else {
      setScrollX(newX);
    }
  };

  return (
    <Wrapper>
      <div className='scroll-cards-container'>
        <StyledArticle>
          <h3>A semantic, breakout button</h3>
          <p>
            This whole box is clickable, but still uses a button element,
            correctly. It also only behaves like this <i>if</i> JavaScript is
            available and working.
          </p>
          <button className='breakout-button' type='button'>
            Say Hi 👋
          </button>
        </StyledArticle>
      </div>
    </Wrapper>
  );
};

export default Card;
