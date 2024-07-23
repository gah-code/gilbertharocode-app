import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

// const query = graphql`
//   {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `;

const SEO = ({ title, description, children, author, siteUrl }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;
  const canonical = site.siteMetadata?.siteUrl;
  // const defaultSeo = site.siteMetadata?.siteUrl

  return (
    <Helmet>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name='robots' content='index,follow' />
      <link rel='canonical' href={canonical} />

      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:creator' content={site.siteMetadata?.author || ``} />
      {/* <meta name="twitter:url" content={defaultSeo} /> */}

      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={metaDescription} />
      {children}
    </Helmet>
  );
  // const { site } = useStaticQuery(query);
  // const metaDescription = description || site.siteMetadata.description;
  // return (
  //   <Helmet
  //     htmlAttributes={{ lang: 'en' }}
  //     title={`${title} | ${site.siteMetadata.title}`}
  //     meta={[{ name: `description`, content: metaDescription }]}
  //   ></Helmet>
  // );
};

export default SEO;
