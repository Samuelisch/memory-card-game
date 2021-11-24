import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  width: 150px;
  height: 200px;
  border: 1px solid red;
  border-radius: 5px;

  .imageContainer {
    height: 70%;
    border-bottom: 1px solid green;
  }

  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
  }
`;

const Card = ({ imgSrc, name }) => {
  return (
    <StyledCard>
      <div className="imageContainer">
        <img src="#" alt="template" />
      </div>
      <p className="name">{name}</p>
    </StyledCard>
  )
}

export default Card