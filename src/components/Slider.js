import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import styled from 'styled-components';
import { Card } from 'theme-ui';

const StyledGallery = styled.section`
  border: solid 3px brown;
  padding: 5rem 0;
  overflow: hidden;
  position: relative;
`;

const StyledList = styled.ul`
  display: flex;
  gap: 20px; /* Replaces var(--size-3) */
  /* padding: 30px 16px 40px 16px;  */
  overflow-x: auto;
  /* scroll-snap-type: x mandatory; */
  scroll-padding: 16px; /* Replaces var(--size-3) */

  & > * {
    scroll-snap-align: start;
    flex: 0 0 auto; /* Prevent flex items from shrinking */
  }

  /* Hide scrollbar for better UX on most browsers */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledItem = styled.li`
  /* border: solid 3px #333; */
  max-height: 300px;
  min-width: 200px;
  /* padding: 1.5rem 2rem; */
  box-sizing: border-box;
  flex: 0 0 auto; /* Prevent flex items from shrinking */
  border-radius: 8px;
  background: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledArticle = styled.article`
  color: #fff;
  padding: 1rem 1.5rem;
  max-width: 23.22222rem;
  background: #252525;
  position: relative;
  border-radius: 10px;
  box-shadow: none;
  transition: transform 300ms ease-in-out, box-shadow 400ms ease,
    background 100ms ease;

  &:hover,
  &:focus-within {
    background: #111111;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.3);
    transform: translateY(-0.5rem);
  }

  > * + * {
    margin-top: 0.5em;
  }
  p {
    font-size: 12px;
  }

  .breakout-button {
    font: inherit;
    font-weight: 600;
    padding: 0.2rem 0.2rem;
    background: transparent;
    color: currentcolor;
    border: 1px solid;
    transition: background 100ms ease;
    position: static;
    cursor: pointer;

    &:hover {
      background: #333333;
    }

    &:focus {
      outline: none;
    }

    &:focus::before {
      outline: 1px solid #ffffff;
      outline-offset: -0.8rem;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &:not([data-interactive])::before {
      display: none;
    }

    .author-img {
      /* width: 100px; */
      aspect-ratio: 1;
      object-fit: cover;
      max-width: 100%;
      border-radius: 100vw;
    }
  }
`;

const Slider = (props) => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <StyledGallery>
      <StyledList ref={ref}>
        {/* <Card /> */}
        {/* <StyledItem> */}
        {/* <StyledArticle>
          <img
            class='author-img'
            src='https://images.unsplash.com/photo-1560918801-53fe5c710a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMzNTkxOTJ8&ixlib=rb-4.0.3&q=70&w=100'
            alt=''
          ></img>
          <h3>A semantic, breakout button</h3>
          <p>
            This whole box is clickable, but still uses a button element,
            correctly.
          </p> */}
        {/* <button className='breakout-button' type='button'>
            Say Hi 👋
          </button> */}
        {/* </StyledArticle> */}
        {/* </StyledItem> */}
        {/* <StyledItem>
          <Card />
        </StyledItem> */}
        <StyledItem>
          <StyledArticle>
            <img
              class='author-img'
              src='https://images.unsplash.com/photo-1560918801-53fe5c710a80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMzNTkxOTJ8&ixlib=rb-4.0.3&q=70&w=100'
              alt=''
            ></img>
            <h3>A semantic, breakout button</h3>
            <p>
              This whole box is clickable, but still uses a button element,
              correctly. It also only behaves like this <i>if</i> JavaScript is
              available and working.
            </p>
            <a className='' type=''>
              read more
            </a>
          </StyledArticle>
        </StyledItem>
        <StyledItem>
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
        </StyledItem>
        <StyledItem>
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
        </StyledItem>
        {/* Add more StyledItem components as needed */}
      </StyledList>
    </StyledGallery>
  );
};

export default Slider;
