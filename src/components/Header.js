import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  background: rgb(0, 200, 220);
  padding: 10px 20px;
  box-shadow: 2px 3px 2px rgb(0, 70, 120);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  h1 {
    margin: auto 0;
    font-size: 1.5rem;
    width: 90px;
  }

  .scoreBoard {
    font-size: 1.2rem;
    text-align: right;
  }
`;

const Header = ({ store, changeDeck }) => {
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if (store.length > maxScore) {
      setMaxScore(store.length);
    }
  }, [store.length, maxScore])

  return (
    <StyledHeader>
      <h1>Memory Card Game</h1>
      <div className="selection" onChange={(e) => changeDeck(e)}>
        <select name="decks">
          <option value="yugioh">YuGiOh</option>
          <option value="f1">F1 Drivers</option>
        </select>
      </div>
      <div className="scoreBoard">
        <p>Current score: {store.length}</p>
        <p>Max score: {maxScore}</p>
      </div>
    </StyledHeader>
  )
}

export default Header