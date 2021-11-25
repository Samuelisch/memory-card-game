import React from "react"
import Card from "./gameAssets/Card"
import styled from 'styled-components'

const StyledGrid = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: grid;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;


const Game = ({ cards, handleCardClick }) => {
  return (
    <StyledGrid>
      {cards.map(card => (
        <Card key={card.id} id={card.id} imgSrc={card.imgSrc} name={card.name} cardClick={handleCardClick} />
      ))}
    </StyledGrid>
  )
}

export default Game