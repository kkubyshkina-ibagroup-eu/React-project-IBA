import Header from "./components/Header";
import Cards from "./components/Cards";
import cards from "./Constants";
import "./components/Header.css";

function App() {
  return (
    <div>
      <Header />
      <Cards cardInfo={cards} />
    </div>
  );
}

export default App;
