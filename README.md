# Memory Card Game Application

A simple card game based on memory, created with ReactJS.

## Access deployment

Live implenetation built and accessible with [GitHub Pages](https://samuelisch.github.io/memory-card-game/).

## Motivation

In the process of learning lifecycle changes, and state hooks, I want to get more familiar with **useState** and **useEffect**, to work with functional components. There was some confusion with useEffect, but [Sebastian Weber's post on useEffect](https://blog.logrocket.com/guide-to-react-useeffect-hook/) cleared a lot of it up for me.

## Gameplay

This memory card game relies on the user's... you guessed it, memory! There are currently two decks for the user to choose from:
- YuGiOh Card Deck
- F1 Drivers (as of 2021)

After each card click, the deck re-shuffles, and the user has to avoid clicking the same card twice to increase their score.

### Features

This application makes use of state hooks with **useState**, and lifecycle methods with **useEffect**. These methods allows the application to keep track of a user's current score, and only updates / increases the max score if the user's current score is more than their max score.

The rendering of the current deck's information and images are also used with **useEffect**. The images are loaded only when the selection of decks change. The current score will also be reset to 0.

### Future implementations

A smoother experience can be achieved through transition events. For example, there can be an animation when shuffling cards.

Game progression with increasing difficulty through levels can also be implemented for a better user experience.

The fetching and storing of image details can be done dynamically, instead of storing each card's details manually in an object.
