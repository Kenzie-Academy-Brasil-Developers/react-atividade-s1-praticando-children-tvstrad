import "./App.css";
import CenteredCard from "./components/CenteredCard";
function App() {
  return (
    <div className="App">
      <div className="AppBody">
        <CenteredCard name="Thiago" age={32} contact="323-232" />
        <CenteredCard name="Ana" age={28} contact="323-232" />
        <CenteredCard name="Beatriz" age={20} contact="323-232" />
      </div>
    </div>
  );
}

export default App;
