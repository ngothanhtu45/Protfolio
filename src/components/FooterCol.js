import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ColStyle = styled.div`
  .heading {
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }
  li {
    margin-bottom: 1rem;
  }
  a {
    font-size: 1.8rem;
  }
`;

export default function FooterCol({
  heading = 'col heading',
  links = [
    {
      type: 'Links',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Links',
      title: 'About',
      path: '/about',
    },
    {
      type: 'Links',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Links',
      title: 'Home',
      path: '/home',
    },
  ],
}) {
  return (
    <ColStyle>
      <h1 className="heading">{heading}</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            {link.type === 'Link' ? (
              <Link to={link.path}>{link.title}</Link>
            ) : (
              <a href={link.path} target="blank" rel="noreferrer">
                {link.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </ColStyle>
  );
}
