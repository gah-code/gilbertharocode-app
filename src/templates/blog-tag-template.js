// import React from 'react';
// import { graphql } from 'gatsby';
// // import RecipesList from '../components/RecipesList';
// import BlogsList from '../components/BlogsList';
// import Layout from '../components/Layout';

// const BlogTagTemplate = ({ data, pageContext }) => {
//   const blogs = data.allContentfulBlog.nodes;
//   return (
//     <Layout>
//       <main className='page'>
//         <h2>{pageContext.tag}</h2>
//         <div className='tag-recipes'>
//           {/* <RecipesList recipes={recipes} /> */}
//           <BlogsList blogs={blogs} />
//         </div>
//       </main>
//     </Layout>
//   );
// };

// export const query = graphql`
//   query GetBlogsByTag($tag: String) {
//     allContentfulBlog(
//       sort: { fields: title, order: ASC }
//       filter: { content: { tags: { eq: $tag } } }
//     ) {
//       nodes {
//         title
//         id
//         readTime

//         image {
//           gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
//         }
//       }
//     }
//   }
// `;

// export default BlogTagTemplate;
