import React from "react";
import { shallow } from "enzyme";

import Master from "../Master";
import HeroCard from "../HeroCard";
import data from "../../data.json";

test("Master renders properly", () => {
  const master = shallow(<Master heroes={data.heroes} />);
  expect(master).toMatchSnapshot();
});

xtest("Master render HeroCard amount based on props", () => {
  const master = shallow(<Master heroes={data.heroes} />);
  expect(master.find(HeroCard).length).toEqual(data.heroes.length);
});
