const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  result.data.allContentfulRecipe.nodes.forEach((recipe) => {
    recipe.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/tags/${tagSlug}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};

// const path = require(`path`);

// const templatePath = path.resolve(`PATH/TO/TEMPLATE.js`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetBlogs {
      allContentfulBlog {
        nodes {
          content {
            tags
          }
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
  `);

  result.data.allContentfulBlog.nodes.forEach((blog) => {
    blog.content.tags.forEach((tag) => {
      const tagSlug = slugify(tag, { lower: true });
      createPage({
        path: `/blogTags/${tagSlug}`,
        component: path.resolve(`src/templates/blog-tag-template.js`),
        context: {
          tag: tag,
        },
      });
    });
  });
};

// gatsby-node.js
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type ConfigJson implements Node {
      siteTitle: String
      socialLinks: [SocialLinkJson]
    }

    type SocialLinkJson implements Node {
      platform: String
      url: String
    }
  `;
  createTypes(typeDefs);
};
