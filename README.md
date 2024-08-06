# g-code Website 2024 - 2025

Welcome to the GilbertharoCode App! This repository hosts the source code for a web application designed to showcase various coding projects, tutorials, and resources.

## Table of Contents

- [Overview](#overview)
- [Features](#features)

## Overview

The GilbertharoCode App is a platform for sharing coding projects, tutorials, and resources. Built using modern web technologies, this application aims to provide an engaging and informative experience for developers of all levels.

## Features

- **Project Showcase**: Display a curated list of coding projects with detailed descriptions and links to repositories.
- **Tutorials**: Share step-by-step tutorials on various programming topics.
- **Resource Library**: Offer a collection of useful resources such as documentation, tools, and libraries.
- **Responsive Design**: Ensure the app looks great on all devices, from desktops to mobile phones.

## Updates

### Site Build Updates

#### Styled Components

- Renamed styled-components to `TagContainer`, `TagList`, and `TagItem` for clarity.
- Applied provided styles to `TagList` and `TagItem` for consistent tag display.
- Updated component to use `setupTags` and map over `newTags` to render tags with links.

#### BlogList Component

- Updated BlogList component to correctly access nested fields in GraphQL query results.
- Added checks to ensure `description` and `tags` fields are handled properly.
- Applied conditional rendering for tags to avoid rendering errors with potential undefined values.
- Used console logging for debugging the data structure before rendering.

#### Dependencies

- Installed `framer-motion`:

  ```sh
  npm install framer-motion
  ```

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
