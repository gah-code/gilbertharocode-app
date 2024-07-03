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

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;

//   const result = await graphql(`
//     query {
//       allContentfulBlog {
//         nodes {
//           description {
//             description
//           }
//           featured
//           id
//           readTime
//           title
//         }
//       }
//     }
//   `);

//   result.data.allContentfulBlog.forEach((node) => {
//     createPage({
//       path: node.id,
//       component: templatePath,
//       context: {
//         id: node.id,
//       },
//     });
//   });
// };
