import React, { useState, useEffect } from 'react'
import Header from './components/Header';
import Game from './components/Game';
import { createGlobalStyle } from 'styled-components'
import YuGiOhDeck from "./components/gameAssets/yuGiOhDeck";
import F1Drivers from './components/gameAssets/f1DriverDeck';


const GlobalStyle = createGlobalStyle`
  :root,
  body {
    font-family: Helvetica;
    font-size: 10px;
    margin: 0;
    background: rgb(0, 20, 60);
  }
`;

const App = () => {
  const [cards, setCards] = useState([]);
  const [store, setStore] = useState([]);
  const [deck, setDeck] = useState('yugioh')

  useEffect(() => {
    document.title = "Memory Card Game";  
  }, []);

  useEffect(() => {
    if (deck === 'yugioh') {
      setCards(YuGiOhDeck);
    } else if (deck === 'f1') {
      setCards(F1Drivers);
    }
    handleStoreReset();
  }, [deck])

  const handleChangeDeck = (e) => {
    setDeck(e.target.value)
  }

  const shuffleCards = () => {
    let cardsCopy = [...cards]
    for (let i = cardsCopy.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
    }
    setCards(cardsCopy);
  }

  const handleStoreChange = (id) => {
    setStore([...store, id]);
  }

  const handleStoreReset = () => {
    setStore([]);
  }
  
  const handleCardClick = (uniqueId) => {
    if (store.find(id => id === uniqueId)) {
      handleStoreReset();
    } else {
      handleStoreChange(uniqueId)
    }
    shuffleCards();
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header store={store} changeDeck={handleChangeDeck} />
      <Game 
        cards={cards}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}

export default App;
