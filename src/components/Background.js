import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Heading, Text, Button } from 'theme-ui';
import theme from '../gatsby-plugin-theme-ui';

const skills = [
  {
    skill: 'HTML',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'CSS',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'SCSS',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Styled Components',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Responsive Design',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'JavaScript',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'React',
    level: 'advanced',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'JAM Stack',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'AEM',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Astro',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Excel',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'SEO',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Gatsby',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Theme UI',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'GraphQL',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'a11y',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Progressive enhancement',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Design Graph',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'MDX',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Hack The Box',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Mongo DB',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'UX',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Supabase',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Java Content Repository',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'ACS Commons tools',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Photoshop',
    level: 'intermediate',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Storybook',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'SSG',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Redux',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Art Direction',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Next Js',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'Tailwind CSS',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
  {
    skill: 'WordPress',
    level: 'beginner',
    color: 'rgb(236 201 137)',
  },
];

const Background = ({ content }) => {
  // const { frontmatter, rawMarkdownBody } = content;
  return (
    <StyledSection>
      <div className='container grid-2'>
        <div className='data'>
          {/* <SkillList /> */}

          {/* <h4>What I love Building with </h4> */}

          <p className='single-tool'>Styled Components</p>
          <p className='single-tool'>Headless architecture</p>
          <p className='single-tool'>Astro + Netlify</p>
          <p className='single-tool'>Intrinsic SCSS</p>
          <p className='single-tool'>Design Graph</p>
          <p className='single-tool'>SEO</p>
        </div>

        <div>
          <Text
            sx={{
              ...theme.styles.paragraph,
            }}
          >
            FRONT END OCEAN
            {/* {frontmatter.subtitle} */}
          </Text>
          <Heading
            sx={{
              ...theme.styles.h2,
            }}
          >
            Fast Moveing Front End
            {/* {frontmatter.title} */}
          </Heading>
          <Text sx={theme.text.paragraph}>Like many developers,</Text>
          <span className='highlighted'>
            I struggled to figure out where to begin, but one thing was clear: I
            wanted the ability to create free-flowing layouts to display my work
            as I wished. Reliability, fast load speeds, and a fun user
            experience were my top priorities.
          </span>
          <br />
          {/* <Button variant='primary' sx={{ mt: 3 }}>
            <Link to='/topics/'>topics & side quest</Link>
          </Button> */}
        </div>
      </div>
    </StyledSection>
  );
};

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className='skill' style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === 'beginner' && ''}
        {level === 'intermediate' && ''}
        {level === 'advanced' && ''}
      </span>
    </div>
  );
}

const StyledSection = styled.section`
  position: relative;
  padding: 3.9rem 2rem;

  @media (max-width: 84em) {
    padding: 5.8rem 0;
  }

  @media (max-width: 34em) {
    padding: 3rem 0.8rem 2rem 0.8rem;
    row-gap: 5rem;
  }

  .item {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    padding: 10px 18px;
    padding-right: 20px;
    cursor: pointer;
    border-top: 4px solid #fff;
    border-bottom: 4px solid #fff;
    border-radius: 20px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    column-gap: 24px;
    row-gap: 32px;
    align-items: center;
    background: #7887;
  }

  .project {
    border-radius: 30px;
    background-color: blue;
  }

  ul {
    background-color: red;
  }

  li {
    /* color: #263147; */
    /* background-color: blue; */
    max-width: 30rem;
  }
  .data {
    padding: 32px;
    max-width: 450px;
    padding-top: 10px;
    position: relative;
    /* /* display: flex; */
    align-items: center;
    justify-content: center;
    transition: 0.5s;
  }

  .single-tool:first-of-type {
    margin-top: 1rem;
    /* padding-top: 5px; */
    /* font-size: 1rem; */
  }
  .skill-list {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 2rem;
    max-width: 32rem;
  }

  .skill {
    font-size: 0.7rem;
    font-weight: 700;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-decoration: none;
    box-shadow: inset 0 0 0 2px #222;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 6px;
    text-transform: uppercase;
    color: #06142e;
    letter-spacing: 0.5px;
  }

  @media (max-width: 59em) {
    .data {
      padding: 0 0.2rem;
    }
  }
  @media (max-width: 34em) {
    .skill-list {
      gap: 6px;
      margin: 1.5rem 0 5rem 0;
    }
    .skill {
      padding: 0.6rem 0.8rem;
      font-size: 0.7rem;
    }

    .data {
      padding: 0;
    }
  }

  /* BELOW 544px (Phones) */
  @media (max-width: 34em) {
    .grid--2-cols-other {
      grid-template-columns: 1fr;
    }

    .data:nth-child(1) {
      grid-row: 2;
    }

    .skill-list {
      margin-top: 1.5rem;
    }

    /* .step-img-box {
      transform: translateY(2.4rem);
    } */
  }
`;

export default Background;
