import React from "react";
import { render, shallow } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";
import Card from "./Card";
import moment from "moment-timezone";

test("renders correctly", () => {
  moment.tz.setDefault("EST");
  const wrapper = render(
    <Router>
      <Card
        card={{
          startTimestamp: moment("2017-09-15 09:00:00").valueOf(),
          endTimestamp: moment("2017-09-15 09:30:00").valueOf(),
          description: "description",
          address: "address",
          livestreaming: false,
          title: "title",
          id: 1,
          images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png",
          ],
        }}
      />
    </Router>
  );

  expect(wrapper).toMatchSnapshot();
});
