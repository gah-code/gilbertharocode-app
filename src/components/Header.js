import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Hero from './Hero';

import { useStaticQuery, graphql } from 'gatsby';

const StyledHeader = styled.header`
  width: 100%;
  max-width: 62.5rem;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: 900;
`;
const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          logo
        }
      }
    }
  `);

  return (
    <>
      <StyledHeader>
        <Link to='/' aria-label='home'>
          <StyledLogo>{data.site.siteMetadata.logo}</StyledLogo>
        </Link>
      </StyledHeader>
      {/* <Hero /> */}
    </>
  );
};

export default Header;
