import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Heading, Text, Link } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';

const ComponentData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          author
          siteDescription
          siteTitle
          siteTitleTwo
          hero {
            heroHeading
          }
          socialLinks {
            platform
            url
          }
        }
      }
    }
  `);

  // Log the data for debugging
  console.log(data);

  const config = data?.allDataJson?.nodes[0];

  if (!config) {
    return <div>No data found</div>;
  }

  return (
    <div>
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {config.siteTitle}
        <span></span>
        <br />
        {config.siteTitleTwo}
      </Heading>
      <Heading
        sx={{
          ...theme.styles.h1,
        }}
      >
        {config.siteTitleTwo}
      </Heading>
      <h1>{config.hero.heroHeading}</h1>
      <p>{config.siteDescription}</p>
      <p>
        <strong>Author:</strong> {config.author}
      </p>
      <nav>
        <ul>
          {config.socialLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ComponentData;
