import "./App.css";
import Header from "./components/Header/Header";
import Contents from "./screens/Contents/Contents";
import Home from "./screens/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Contents />
    </div>
  );
}

export default App;
