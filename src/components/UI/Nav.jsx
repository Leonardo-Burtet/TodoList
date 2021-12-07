import React from 'react';
import styled from 'styled-components';

const SharedStyleNav = styled.nav`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  a {
    padding: 20px;
    border-radius: 2rem;
  }

  @media (max-width: 600px) {
    a {
      padding: 3px;
    }
  }
`;

const Nav = ({ children }) => {
  return <SharedStyleNav>{children}</SharedStyleNav>;
};

export default Nav;
