import { v4 as uuidv4 } from 'uuid'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('../images/f1_drivers', false, /\.(png|jpe?g|svg)$/));

const F1Drivers = [
  {
    id: uuidv4(),
    imgSrc: images['daniel_ricciardo.jpg'],
    name: 'Daniel Ricciardo'
  },
  {
    id: uuidv4(),
    imgSrc: images['lando_norris.jpg'],
    name: 'Lando Norris'
  },
  {
    id: uuidv4(),
    imgSrc: images['sebastian_vettel.jpg'],
    name: 'Sebastian Vettel'
  },
  {
    id: uuidv4(),
    imgSrc: images['antonio_giovinazzi.jpg'],
    name: 'Antonio Giovinazzi'
  },
  {
    id: uuidv4(),
    imgSrc: images['carlos_sainz.jpg'],
    name: 'Carlos Sainz'
  },
  {
    id: uuidv4(),
    imgSrc: images['charles_leclerc.jpg'],
    name: 'Charles Leclerc'
  },
  {
    id: uuidv4(),
    imgSrc: images['esteban_ocon.jpeg'],
    name: 'Esteban Ocon'
  },
  {
    id: uuidv4(),
    imgSrc: images['fernando_alonso.jpeg'],
    name: 'Fernando Alonso'
  },
  {
    id: uuidv4(),
    imgSrc: images['george_russell.jpeg'],
    name: 'George Russell'
  },
  {
    id: uuidv4(),
    imgSrc: images['kimi_raikkonen.jpeg'],
    name: 'Kimi Raikkonen'
  },
  {
    id: uuidv4(),
    imgSrc: images['lance_stroll.jpeg'],
    name: 'Lance Stroll'
  },
  {
    id: uuidv4(),
    imgSrc: images['lewis_hamilton.jpeg'],
    name: 'Lewis Hamilton'
  },
  {
    id: uuidv4(),
    imgSrc: images['max_verstappen.jpeg'],
    name: 'Max Verstappen'
  },
  {
    id: uuidv4(),
    imgSrc: images['mick_schumacher.jpeg'],
    name: 'Mick Schumacher'
  },
  {
    id: uuidv4(),
    imgSrc: images['nicholas_latifi.jpeg'],
    name: 'Nicholas Latifi'
  },
  {
    id: uuidv4(),
    imgSrc: images['nikita_mazepin.jpeg'],
    name: 'Nikita Mazepin'
  },
  {
    id: uuidv4(),
    imgSrc: images['pierre_gasly.jpeg'],
    name: 'Pierre Gasly'
  },
  {
    id: uuidv4(),
    imgSrc: images['sergio_perez.jpeg'],
    name: 'Sergio Perez'
  },
  {
    id: uuidv4(),
    imgSrc: images['valtteri_bottas.jpeg'],
    name: 'Valtteri Bottas'
  },
  {
    id: uuidv4(),
    imgSrc: images['yuki_tsunoda.jpeg'],
    name: 'Yuki Tsunoda'
  }
];

export default F1Drivers