import React, { useState } from "react"
import Card from "./Card"
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 3rem;
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
    {
      id: uuidv4(),
      imgSrc: '#',
      name: 'Silvia Tan'
    },
    {
      id: uuidv4(),
      imgSrc: '#',
      name: 'Jesus Harlim'
    },
    {
      id: uuidv4(),
      imgSrc: '#',
      name: 'Aston Tay'
    },
    {
      id: uuidv4(),
      imgSrc: '#',
      name: 'Colin Soh'
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