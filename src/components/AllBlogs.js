import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagsListBlogs from './TagsListBlog';
import BlogsList from './BlogsList';
import styled from 'styled-components';
import CardSlider from './CardSlider'; // Updated import

const query = graphql`
  query {
    allContentfulBlog {
      nodes {
        description {
          description
        }
        featured
        id
        readTime
        title
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;
const StyledSection = styled.section`
  max-width: 120rem;
  padding: 3.9rem 1.5rem;

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
`;
const AllBlogs = () => {
  const data = useStaticQuery(query);
  const blogs = data.allContentfulBlog.nodes;
  return (
    <StyledSection>
      <section className='blog-container'>
        <TagsListBlogs blogs={blogs} />
        <BlogsList blogs={blogs} />
        {/* <CardSlider blogs={blogs} /> */}
      </section>
    </StyledSection>
  );
};

export default AllBlogs;
