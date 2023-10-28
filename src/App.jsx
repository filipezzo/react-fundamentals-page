import Header from "./components/Header";
import ListComponents from "./components/ListComponents";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ListComponents />
        </section>
        <Menu />
      </main>
    </div>
  );
}

export default App;
