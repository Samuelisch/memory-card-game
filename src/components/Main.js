import React from 'react'
import Cards from './gameAssets/Cards';
import styled from 'styled-components'

const StyledMain = styled.div`
  color: white;
`;

const Main = () => {
  return (
    <StyledMain>
      <Cards />
    </StyledMain>
  )
}

export default Main