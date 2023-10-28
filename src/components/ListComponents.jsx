import CoreConcepts from "./CoreConcepts";
import componentsImg from "../assets/components.png";
import jsxUiImg from "../assets/jsx-ui.png";
import configImg from "../assets/config.png";
import stateMgmtImg from "../assets/state-mgmt.png";
import "./ListComponents.css";
const coreArr = [
  {
    id: 1,
    sourceImg: componentsImg,
    title: "Components",
    description:
      "The core UI building block - compense the user inferface by combining multiple components.",
  },

  {
    id: 2,
    sourceImg: jsxUiImg,
    title: "JSX",
    description:
      "Return (potentially) dynamic HTML(ish) code to define the actual markup that will be rendered.",
  },

  {
    id: 3,
    sourceImg: configImg,
    title: "Props",
    description:
      "The core UI building block - compense the user inferface by combining multiple components.",
  },

  {
    id: 4,
    sourceImg: stateMgmtImg,
    title: "State",
    description:
      "React-managed data which, when changed, causes the component to re-render & the UI to update.",
  },
];

function ListComponents() {
  return (
    <ul>
      {coreArr.map((item) => (
        <CoreConcepts key={item.id} item={item} />
      ))}
    </ul>
  );
}

export default ListComponents;
