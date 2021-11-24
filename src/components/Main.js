import React from 'react'
import Game from './gameAssets/Game';
import styled from 'styled-components'

const StyledMain = styled.div`
  color: white;
`;

const Main = () => {
  return (
    <StyledMain>
      <Game />
    </StyledMain>
  )
}

export default Main