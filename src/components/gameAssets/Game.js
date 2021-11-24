import React, { useState } from "react"
import Card from "./Card"
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledGrid = styled.div`

`;

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: uuidv4(),
      imgSrc: '#',
      name: 'Samuel Chan'
    },
    {
      id: uuidv4(),
      imgSrc: '#',
      name: 'Randy How'
    },
  ])

  return (
    <StyledGrid>
      {cards.map(card => (
        <Card key={card.id} imgSrc={card.imgSrc} name={card.name} />
      ))}
    </StyledGrid>
  )
}

export default Cards