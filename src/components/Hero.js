import React from 'react';
import styled from 'styled-components';
import { Heading, Text, Link } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';
import { graphql, useStaticQuery } from 'gatsby';

const StyledSection = styled.section`
  padding: 5rem 1rem 8rem 1rem;

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
      padding: 5rem 0 3rem 0;
    }
  }
`;

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          author
          siteDescription
          siteTitle
          siteTitleTwo
          hero {
            heroHeading
          }
          socialLinks {
            platform
            url
          }
        }
      }
    }
  `);

  console.log(data);

  const configHero = data?.allDataJson?.nodes[0];

  if (!configHero) {
    return <div>No data found</div>;
  }
  return (
    <StyledSection>
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {configHero.siteTitle}
        {/* <span></span> */}
        <span role='img' aria-label='emoji'></span>

        <br />
        {configHero.siteTitleTwo}
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h3,
        }}
      >
        Surfing the world wide web
        <br />
        <span className='highlighted'>for all front end dev insight</span>
      </Heading>{' '}
      <Heading
        sx={{
          ...theme.styles.h4,
        }}
      >
        Thanks for stopping by!
      </Heading>
      <Text sx={theme.text.paragraph}>{configHero.heroDescription}</Text>{' '}
      <Text
        sx={{
          ...theme.text.paragraph,
        }}
      >
        It's mind-boggling how active the front-end development ecosystem has
        been. It feels like not so long ago I stumbled upon this world while
        needing a solution to market my photography services at the time.
      </Text>
      <br />
      <Text
        sx={{
          ...theme.text.paragraph,
          mb: 3, // Bottom margin for spacing
          mt: 1,
        }}
      >
        The variety of frameworks that have come, gone, and remained the most
        used before I even began my front-end journey is remarkable.
      </Text>
      <Text
        sx={{
          // textAlign: 'center',

          mt: 4,
          display: 'block',
          ...theme.text.heading,
        }}
      >
        This is where I compile some of my favorite discoveries and concepts.
      </Text>
    </StyledSection>
  );
};

export default Hero;
