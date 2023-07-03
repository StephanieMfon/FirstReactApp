import "./App.css";
import Header from "./Header";
import Main from "./Main";
function App() {
  return (
    <div
      className="App"
      style={{ background: "#f3f3f3", height: "135vh", padding: "15px" }}
    >
      <Header />
      <Main />
    </div>
  );
}

export default App;
