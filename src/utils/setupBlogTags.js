const setupBlogTags = (blogs) => {
  const allTags = {};

  blogs.forEach((blog) => {
    blog.content.tags.forEach((tag) => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1;
      } else {
        allTags[tag] = 1;
      }
    });
  });
  const newBlogTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a;
    const [secondTag] = b;
    return firstTag.localeCompare(secondTag);
  });

  return newBlogTags;
};

export default setupBlogTags;
