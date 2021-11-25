import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
  width: 210px;
  height: 384px;
  border: 5px solid rgb(0, 200, 220);
  border-radius: 5px;
  margin: 10px;
  overflow: hidden;
  background: rgb(0, 200, 220);
  text-align: center;

  .imageContainer {
    height: 80%;
    border-bottom: 2px solid green;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .name {
    font-size: 2rem;
    font-weight: bold;
    color: rgb(10, 10, 10);
  }

  &:hover {
    box-shadow: 1px 2px 3px 3px rgb(250, 250, 250);
  }

  &:active {
    box-shadow: none;
  }
`;

const Card = ({ id, imgSrc, name, cardClick }) => {
  return (
    <StyledCard onClick={() => cardClick(id)}>
      <div className="imageContainer">
        <img src={imgSrc.default} alt="card" />
      </div>
      <div className="nameContainer">
        <p className="name">{name}</p>
      </div>
    </StyledCard>
  )
}

export default Card