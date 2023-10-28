import "./CoreConcepts.css";

function CoreConcepts({ item }) {
  return (
    <li>
      <img src={item.sourceImg} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </li>
  );
}

export default CoreConcepts;
