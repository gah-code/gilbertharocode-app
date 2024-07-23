import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import TagsListBlogs from './TagsListBlog';
import BlogsList from './BlogsList';
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
const AllBlogs = () => {
  const data = useStaticQuery(query);
  const blogs = data.allContentfulBlog.nodes;
  return (
    <div>
      <TagsListBlogs blogs={blogs} />
      <BlogsList blogs={blogs} />
    </div>
  );
};

export default AllBlogs;
