import React from 'react';
import setupTags from '../utils/setupTags';
import { Link } from 'gatsby';
import slugify from 'slugify';
import styled from 'styled-components';

// const StyledSection = styled.div`
//   .tags-container {
//     order: 1;
//     display: flex;
//     flex-direction: column;
//     /* background: blue; */
//   }

//   .tags-list {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;
//   }
//   .tags-container h4 {
//     margin-bottom: 0.5rem;
//     font-weight: bold;
//   }
//   .tags-list a {
//     text-transform: capitalize;
//     display: block;
//     color: var(--grey-800);
//     transition: var(--transition);
//   }
//   .tags-list a:hover {
//     color: var(--primary-500);
//   }
// `;

const TagsList = ({ recipes }) => {
  const newTags = setupTags(recipes);
  return (
    // <StyledSection>
    <div className='tag-container'>
      <h4>Post</h4>
      <div className='tags-list'>
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
    // </StyledSection>
  );
};

export default TagsList;
