import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PizzaToppings from "./PizzaToppings";
import TsteeleComponent from "./TsteeleComponent";
import ThamiltonComponent from "./ThamiltonComponent";
import Welcome from "./Welcome";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="m-3">
      <h1>React Components</h1>
      <PizzaToppings />
      <TsteeleComponent />
      <Welcome />
      <ThamiltonComponent />
    </div>
  );
};

export default App;
