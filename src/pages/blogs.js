import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import setupTags from '../utils/setupBlogTags';
import slugify from 'slugify';

const Blogs = ({ data }) => {
  const newBlogTags = setupTags(data.allContentfulBlogs.nodes);
  return (
    <Layout>
      <main className='page'>
        <section className='tags-page'>
          {newBlogTags.map((tag, index) => {
            const [text, value] = tag;
            const slug = slugify(text, { lower: true });
            return (
              <Link to={`/blogTags/${slug}`} key={index} className='tag'>
                <h5>{text}</h5>
                <p>{value} recipe</p>
              </Link>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  {
    allContentfulBlog {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

export default Blogs;
