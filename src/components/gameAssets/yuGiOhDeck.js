import { v4 as uuidv4 } from 'uuid'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => images[item.replace('./', '')] = r(item));
  return images;
}

const images = importAll(require.context('../images/yu_gi_oh', false, /\.(png|jpe?g|svg)$/));

const YuGiOhDeck = [
  {
    id: uuidv4(),
    imgSrc: images['black_luster_soldier.jpeg'],
    name: 'Black Luster Soldier'
  },
  {
    id: uuidv4(),
    imgSrc: images['blue_eyes_white_dragon.jpeg'],
    name: 'Blue Eyes White Dragon'
  },
  {
    id: uuidv4(),
    imgSrc: images['chaos_emperor_dragon.jpeg'],
    name: 'Chaos Emperor Dragon'
  },
  {
    id: uuidv4(),
    imgSrc: images['dark_magician_girl.jpeg'],
    name: 'Dark Magician Girl'
  },
  {
    id: uuidv4(),
    imgSrc: images['dark_magician.jpeg'],
    name: 'Dark Magician'
  },
  {
    id: uuidv4(),
    imgSrc: images['dark_paladin.jpeg'],
    name: 'Dark Paladin'
  },
  {
    id: uuidv4(),
    imgSrc: images['dragon_master_knight.jpeg'],
    name: 'Dragon Master Knight'
  },
  {
    id: uuidv4(),
    imgSrc: images['firewall_dragon.jpeg'],
    name: 'Firewall Dragon'
  },
  {
    id: uuidv4(),
    imgSrc: images['obelisk_the_tormentor.jpeg'],
    name: 'Obelisk The Tormentor'
  },
  {
    id: uuidv4(),
    imgSrc: images['pot_of_greed.jpeg'],
    name: 'Pot Of Greed'
  },
  {
    id: uuidv4(),
    imgSrc: images['red_eyes_dark_dragon.jpeg'],
    name: 'Red Eyes Dark Dragon'
  },
  {
    id: uuidv4(),
    imgSrc: images['red_supernova_dragon.jpeg'],
    name: 'Red Supernova Dragon'
  },
  {
    id: uuidv4(),
    imgSrc: images['silent_swordsman.jpeg'],
    name: 'Silent Swordsman'
  },
  {
    id: uuidv4(),
    imgSrc: images['slifer_the_sky_dragon.jpeg'],
    name: 'Slifer The Sky Dragon'
  },
  {
    id: uuidv4(),
    imgSrc: images['solemn_judgement.jpeg'],
    name: 'Solemn Judgement'
  },
  {
    id: uuidv4(),
    imgSrc: images['v_salamander.jpeg'],
    name: 'V Salamander'
  }
];

export default YuGiOhDeck;