import React from 'react';
import setupTagsBlogs from '../utils/setupTagsBlogs';
import { Link } from 'gatsby';
import slugify from 'slugify';

const TagsListBlog = ({ blogs }) => {
  const newTags = setupTagsBlogs(blogs);
  return (
    <div className='tag-container'>
      <h4>blogs</h4>
      <div className='tags-list'>
        {newTags.map((tag, index) => {
          const [text, value] = tag;
          const slug = slugify(text, { lower: true });

          return (
            <Link to={`/tags/${slug}`} key={index}>
              {text} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsListBlog;
