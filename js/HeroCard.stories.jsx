import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import React from 'react';

import HeroCard from './HeroCard';

const hero = {
  id: 7,
  name: 'Loki',
  true_name: 'Loki Laufeyson',
  powers: [
    'increased lifespan',
    'superhuman strength',
    'astral projection',
    'eldritch energy blast',
    'telepathy',
    'hypnosis',
    'teleportation',
    'immunity to physical injury'
  ],
  place_of_birth: 'Jotunheim, Asgard',
  citizenship: 'Realm of Asgard',
  image: '/assets/portraits/loki.jpg',
  comics: [],
  description:
    'Loki Laufeyson is the son of Queen Farbauti and King Laufey, leader of the Giants of Jotunheim. He was born small and was an embarrassment to his parents, and was segregated from other Giants.'
};

storiesOf('HeroCard', module)
  .addDecorator(StoryRouter())
  .add('It should render properly', () => <HeroCard hero={hero} />);
