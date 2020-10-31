import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createSerializer } from "enzyme-to-json";
import sinon from "sinon";

// Sets the default serializer for Jest to be from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: "deep" }));

// React 17 Enzyme Adapter
Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.sinon = sinon;
