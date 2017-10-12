import React from 'react'
import {storiesOf} from "@storybook/react";
import StoryRouter from 'storybook-router';
import HeroCard from './HeroCard';

const hero = {
  "id": 1,
  "name": "Black Window",
  "true_name": "Natalia \"Natasha\" Alianovna Romanova",
  "powers": [
    "slowed aging",
    "enahnced immune system",
    "martail arts",
    "pistols"
  ],
  "place_of_birth": "Stalingrad, U.S.S.R",
  "citizenship": "Former U.S.S.R, U.S.A",
  "image": "black_widow.jpg",
  "comics": [],
  "description": "There are varying accounts of Romanova's early life. One account states that in 1928, Nazis set the building in Stalingrad that Natasha and her mother were living in on fire. Her mother threw her out the window to a Russian soldier before dying in the fire.[6][8] The soldier's name was Ivan Petrovitch, and he watched over Natasha for her entire life, remaining by her side as her \"foster father\"."
}
storiesOf('HeroCard', module)
.addDecorator(StoryRouter())
.add("It should render", () =>
  <HeroCard hero={hero} />
)