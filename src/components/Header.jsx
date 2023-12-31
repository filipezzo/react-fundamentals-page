import "./Header.css";

const reactDescriptions = ["Fundamental", "Crutial", "Core"];
import logo from "../assets/react-core-concepts.png";

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const result = genRandomInt(reactDescriptions.length - 1);
  return (
    <header>
      <img src={logo} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[result]} React concepts you will need for almost any
        app you are going to build!
      </p>
    </header>
  );
}

export default Header;
