import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Hello from "./hello";

describe("Hello", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Hello />);
  });

  it("dummy", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
