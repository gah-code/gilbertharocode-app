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
import HomeTagsList from '../components/HomeTagsList';
import SEO from '../components/SEO';
import AllBlogs from '../components/AllBlogs';
import Slider from '../components/temp/Slider';
import CardSlider from '../components/CardSlider';
import ComponentData from '../components/ComponentData';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Home Page' />
      <main className='page'>
        <Hero />

        {/* <ComponentData /> */}

        <CardSlider />
        {/* <Slider /> */}
        <Divider />

        {/* <HomeTagsList /> */}
        {/* <AllBlogs /> */}
        <About />
        <Divider />
        <Background />

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

        {/* <AllRecipes /> */}
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
