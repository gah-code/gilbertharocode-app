import * as React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { Heading, Text, Link, Divider } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';
import styled from 'styled-components';
import About from '../components/About';
import Background from '../components/Background';
import { StaticImage } from 'gatsby-plugin-image';
import AllRecipes from '../components/AllRecipes';
import Hero from '../components/Hero';
import SEO from '../components/SEO';
import AllBlogs from '../components/AllBlogs';

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

const IndexPage = ({ data }) => {
  // const findContentById = (data, id, category) => {
  //   return data[category].edges.find((edge) => edge.node.frontmatter.id === id)
  //     ?.node;
  // };

  // const heroContent = findContentById(data, 0, 'hero');
  return (
    <Layout>
      <SEO title='Home Page' />
      <main className='page'>
        <StyledSection>
          <Heading
            sx={{
              ...theme.styles.h1,
            }}
          >
            Hola
            {/* {frontmatter.greetings} */}
            <span role='img' aria-label='emoji'>
              {/* {frontmatter.emoji} */}
            </span>
            <br />
            I'm Gilbert
            {/* {frontmatter.title} */}
          </Heading>
          <Heading
            sx={{
              ...theme.styles.h3,
            }}
          >
            Surfing the world wide web
            <br />
            {/* {frontmatter.subtitlePrefix}{' '} */}
            <span className='highlighted'>for all front end dev insight</span>
          </Heading>
          <Heading
            sx={{
              ...theme.styles.h4,
            }}
          >
            Thanks for stopping by!
            {/* {rawMarkdownBody} */}
          </Heading>

          <Text sx={theme.text.paragraph}>
            From a young age, I was doodling in my notebook, creating makeshift
            comic books experimenting with themed fonts, and always exploring
            ways to express my creativity. A passion for digital expression grew
            during the MySpace era and later led me to professional{' '}
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
            development. It offered not only a platform for my photography but
            also opened up countless opportunities, landing me gigs that allowed
            me to combine all my interests and skills. Today, as a{' '}
            <Link
              href='https://www.roberthalf.com/us/en'
              sx={{
                variant: 'links.bold',
              }}
            >
              Web Developer{' '}
            </Link>{' '}
            , I merge my love for design patterns, typography, digital
            creativity, branding, and photography to create unique and impactful
            digital experiences.
          </Text>
        </StyledSection>

        <Divider />
        <About />
        <Divider />
        <Background />
        {/* <Hero content={data.hero} /> */}

        {/* <header className='hero'>
          <StaticImage
            src='../assets/images/main.jpeg'
            alt='eggs'
            className='hero-img'
            placeholder='tracedSVG'
            layout='fullWidth'
          ></StaticImage>

          

          <div className='hero-container'>
            <div className='hero-text'>
              <h1>simply recipes</h1>
              <h4>no fluff, just recipes</h4>
            </div>
          </div>
        </header> */}
        {/* <AllBlogs /> */}
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query {
    hero: markdownRemark(frontmatter: { title: { eq: "Welcome to My Blog" } }) {
      frontmatter {
        greetings
        emoji
        title
        subtitlePrefix
        subtitleHighlight
      }
      rawMarkdownBody
    }
  }
`;
