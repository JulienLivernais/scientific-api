import TitleSearch from "./components/TitleSearch";
import GravityCalculator from "./components/GravityCalculator";
import UnitConverter from "./components/UnitConverter";
import StatsForm from "./components/StatsForm";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Science Basic App</h1>
      <TitleSearch />
      <GravityCalculator />
      <UnitConverter />
      <StatsForm />
    </div>
  );
}

export default App;