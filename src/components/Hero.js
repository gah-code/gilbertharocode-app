import React from 'react';
import styled from 'styled-components';
import { Heading, Text, Link } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';

const StyledSection = styled.section`
  padding: 5rem 2rem 8rem 2rem;

  .title {
    margin-bottom: 0.8rem;
    padding-top: 3.5rem;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #55c57a;
  }

  .description {
    padding: 8rem 0 1rem 0;
    font-family: system-ui, sans-serif;
    font-weight: 700;
    line-height: 1;
  }

  /**************************/
  /* BELOW 944px (Tablets) */
  /**************************/

  @media (max-width: 59em) {
    .description {
      padding: 5rem 0 1rem 0;
    }
  }
`;

const Hero = ({ content }) => {
  // Check if content is not null before destructuring
  if (!content) {
    // You could return a loading indicator, a placeholder, or simply null
    return <StyledSection>No hero content available.</StyledSection>;
  }

  const { frontmatter, rawMarkdownBody } = content;
  // const { frontmatter, rawMarkdownBody } = content;
  return (
    <StyledSection>
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {frontmatter.greetings}
        <span role='img' aria-label='emoji'>
          {frontmatter.emoji}
        </span>
        <br />
        {frontmatter.title}
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h3,
        }}
      >
        {frontmatter.subtitlePrefix}{' '}
        <span className='highlighted'>{frontmatter.subtitleHighlight}</span>
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h4,
        }}
      >
        {rawMarkdownBody}
      </Heading>
      <Text sx={theme.text.paragraph}>
        From a young age, I was doodling in my notebook, creating makeshift
        comic books experimenting with themed fonts, and always exploring ways
        to express my creativity. A passion for digital expression grew during
        the MySpace era and later led me to professional{' '}
        <Link
          href='https://www.georgestreetphoto.com/'
          sx={{
            variant: 'links.bold',
          }}
        >
          {' '}
          photography.{' '}
        </Link>{' '}
        But I yearned for something more later soon after - a platform for
        showcasing my work. That's when I discovered the world of web
        development. It offered not only a platform for my photography but also
        opened up countless opportunities, landing me gigs that allowed me to
        combine all my interests and skills. Today, as a{' '}
        <Link
          href='https://www.roberthalf.com/us/en'
          sx={{
            variant: 'links.bold',
          }}
        >
          Web Developer{' '}
        </Link>{' '}
        , I merge my love for design patterns, typography, digital creativity,
        branding, and photography to create unique and impactful digital
        experiences.
      </Text>

      {/* <div className="description">random things</div>
      <ul>
        <li>My very first job was working as a photographer </li>
        <li>My dog's name is burrito</li>
        <li>Mr. Robot is my fav</li>
        <li>Currenly reading </li>
      </ul> */}
    </StyledSection>
  );
};

export default Hero;
