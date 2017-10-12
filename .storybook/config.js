import { configure } from '@storybook/react';

function loadStories() {
  require('../stories');
  require('../js/HeroCard.stories.jsx')
}

configure(loadStories, module);
