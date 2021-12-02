import { Routes, Route } from "react-router-dom";
import { Main } from "./components/Main/Main";
import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
