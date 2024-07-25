import React from 'react';
import Layout from '../components/Layout';
import AllRecipes from '../components/AllRecipes';
import AllBlogs from '../components/AllBlogs';
import SEO from '../components/SEO';

const BlogPage = () => {
  return (
    <Layout>
      <SEO title='Recipes' />
      <main className='page'>
        <AllBlogs />
        <AllRecipes />
      </main>
    </Layout>
  );
};

export default BlogPage;
