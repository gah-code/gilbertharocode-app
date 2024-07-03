import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import slugify from 'slugify';
const BlogsList = ({ blogs = [] }) => {
  return (
    <div className='recipes-list'>
      {blogs.map((blog) => {
        const { id, title, image, readTime, description } = blog;
        const pathToImage = getImage(image);
        const slug = slugify(title, { lower: true });
        return (
          <Link key={id} to={`/${slug}`} className='recipe'>
            <GatsbyImage
              image={pathToImage}
              className='recipe-img'
              alt={title}
            />
            <h5>{title}</h5>
            <h1>{description}</h1>
            {/* <p>
              Prep : {prepTime}min | Cook : {cookTime}min
            </p> */}
          </Link>
        );
      })}
    </div>
  );
};

export default BlogsList;
