import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import BaseLayout from "./baseLayout";

describe("BaseLayout", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<BaseLayout mainElement={<div />} />);
  });

  it("dummy", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
