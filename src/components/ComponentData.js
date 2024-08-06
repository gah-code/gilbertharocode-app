import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const ComponentData = () => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        nodes {
          author
          siteDescription
          siteTitle
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
      <h1>{config.siteTitle}</h1>
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
