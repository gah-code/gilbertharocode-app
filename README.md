# Updates

- Renamed styled-components to `TagContainer`, `TagList`, and `TagItem` for clarity.
- Applied provided styles to `TagList` and `TagItem` for consistent tag display.
- Updated component to use `setupTags` and map over `newTags` to render tags with links."

--

- Updated BlogList component to correctly access nested fields in GraphQL query results.
- Added checks to ensure `description` and `tags` fields are handled properly.
- Applied conditional rendering for tags to avoid rendering errors with potential undefined values.
- Used console logging for debugging the data structure before rendering."
- npm install framer-motion
- npm install react-icons --save
- Blog / Article Card Component
- Updated CardSlider to pull and display only the first tag from the blog data.
- Modified the GraphQL query to fetch necessary blog fields.
- Integrated styled-components for improved styling and layout.
- Ensured the Card component displays the blog title and the first tag properly.
- Cleaned up unused code and commented-out sections for better readability."
- Blog routing and tag template config -> [docs](https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages)

- Fixed GraphQL query to correctly fetch data from `allDataJson`.
- Updated `ComponentName` component to match the JSON structure and render site title, description, author, and social links.
- Added debugging information to log fetched data.
- Ensured proper handling and rendering of JSON data fields.

<!-- <h1>Title</h1>
        <Heading // apply both the heading styles and the color style
          as='h2'
          mb='2'
          sx={{
            ...theme.text.heading, // Merging the theme text.heading style
            color: 'primary', // Adding additional color style
          }}
        >
          Heading 2
        </Heading>
        <div className='gallery'>
          <ul className='gallery__slider' ref={ref}>
            <li className='gallery__slider-item '>test</li>
            <li className='smol-transitions zoom'>
              {/* <img src={ImgThree} alt='' /> */}
            </li>
            <li className='smol-transitions'>
              <h1>Title</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, inventore.
              </p>
            </li>
            <li></li>
            <li>test</li>
            <li>{/* <img src={ImgThree} alt='' /> */}</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div> -->
