import { configure } from '@storybook/react';

function loadStories() {
  require('../js/HeroCard.stories.jsx');
  require('../stories');
}

configure(loadStories, module);
