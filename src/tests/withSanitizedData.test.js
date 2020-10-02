import { shallow } from "../enzyme";

import withSanitizedData from "../components/hocs/withSanitizedData";
import TableRow from "../components/views/TableView/TableRow";

describe("withSanitizedData Tests", () => {
  it("render default values when props are null", () => {
    const myProps = {
      financial: null,
      physical: null,
      mainImageUrl: null,
      address: {
        address1: "a",
        city: "b",
        state: "c",
        zip: "d",
      },
    };

    const wrapper = shallow(withSanitizedData(TableRow, myProps));
    const allTds = wrapper.find("td");
    expect(allTds.at(1).text()).toEqual("a, b, c d");
    expect(allTds.at(2).text()).toEqual("----");
    expect(allTds.at(3).text()).toEqual("----");
    expect(allTds.at(4).text()).toEqual("----");
    expect(allTds.at(5).text()).toEqual("----");
  });

  it("render correct values when props are not null", () => {
    const myProps = {
      financial: { listPrice: "400", monthlyRent: "300" },
      physical: { yearBuilt: "1990" },
      address: {
        address1: "",
        city: "",
        state: "",
        zip: "",
      },
    };

    const wrapper = shallow(withSanitizedData(TableRow, myProps));
    const allTds = wrapper.find("td");
    expect(allTds.at(2).text()).toEqual(myProps.physical.yearBuilt);
    expect(allTds.at(3).text()).toEqual("$400.00");
    expect(allTds.at(4).text()).toEqual("$300.00");
    expect(allTds.at(5).text()).toEqual("900.00%");
  });
});
