import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagsListBlogs from './TagsListBlog';

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
      }
    }
  }
`;
const AllBlogs = () => {
  const data = useStaticQuery(query);
  const blogs = data.allContentfulBlog.nodes;
  return (
    <div>
      <TagsListBlogs blogs={blogs} />
    </div>
  );
};

export default AllBlogs;
