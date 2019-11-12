import ItemComponent from "../components/Item";
import { shallow } from "enzyme";

const fakeItem = {
  id: "12345",
  title: "cool item",
  price: "12345",
  description: "this item is so cool",
  image: "cool.jpg",
  largeImage: "large_cool.jpg"
};

describe("<Item/>", () => {
  it("renders and displays", () => {
    const wrapper = shallow(<ItemComponent item={fakeItem} />);
    const PriceTag = wrapper.find("PriceTag");
    console.log(wrapper.debug());
    // console.log(PriceTag.text());
  });
});
