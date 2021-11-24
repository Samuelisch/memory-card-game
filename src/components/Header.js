import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background: rgb(0, 200, 220);
  padding: 10px;
  box-shadow: 2px 3px 2px rgb(0, 70, 120);

  h1 {
    margin: 0;
    font-size: 3rem;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Memory Card Game</h1>
    </StyledHeader>
  )
}

export default Header