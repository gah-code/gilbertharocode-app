import React from 'react';
import styled from 'styled-components';
import aboutImg from '../assets/images/me.jpg';
import { Heading, Text } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';
import { graphql, Link } from 'gatsby';

const About = ({ content, alt, maxWidth }) => {
  // const { frontmatter, rawMarkdownBody } = content;
  return (
    <StyledSection>
      <div className='container grid-2'>
        <div>
          <Heading
            sx={{
              ...theme.styles.h2,
            }}
          >
            About
            {/* {frontmatter.title} */}
          </Heading>
          <Text sx={theme.text.paragraph}>
            {' '}
            San Jose, CA with my girlfriend and our adorable pup named 🌯. Our
            weekdays are filled with work, study, and workouts, but on the
            weekends, we love hanging out with friends and indulging in some
            delicious tacos!
          </Text>
          {/* <br /> */}
          {/* <Link style={{ paddingTop: '1rem' }} to="/about-page/">
            Read More
          </Link> */}
          {/* <span className="highlighted">{frontmatter.subtitleHighlight}</span> */}
        </div>
        <PhotoWrapper>
          <Photo src={aboutImg} alt={alt} maxWidth={maxWidth} />
        </PhotoWrapper>
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  max-width: 120rem;
  padding: 3.9rem 2rem;

  @media (max-width: 84em) {
    column-gap: 5rem;
    row-gap: 7rem;
  }

  @media (max-width: 75em) {
    column-gap: 2rem;
    row-gap: 6.9rem;
  }

  @media (max-width: 59em) {
    column-gap: 1rem;
    row-gap: 6rem;
  }

  @media (max-width: 34em) {
    padding: 3rem 0.8rem 2rem 0.8rem;
    row-gap: 5rem;
  }

  .subtitle {
    margin-top: 2rem;
  }
  .highlighted {
    color: hsl(260, 20%, 40%);
    font-size: 1.2rem;
    display: grid;
    padding: 1rem 0 2rem 0;
  }
  .projects {
    width: 444px;
    display: flex;
    flex-direction: column;
    gap: 28px;
    justify-content: center;
  }

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 10px 18px;
    padding-right: 20px;
    cursor: pointer;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 24px;
    row-gap: 32px;
    align-items: center;
    background: #7887;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
`;

const Photo = styled.img`
  max-width: ${(p) => p.maxWidth};
  border-radius: 10px;
`;

export default About;
