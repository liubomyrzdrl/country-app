import { Routes, Route } from "react-router-dom";
import { ChosenCountry } from "./components/chosenCard/ChosenCountry/ChosenCountry";
import { Main } from "./components/Main/Main";
import "./scss/style.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/country/:code" element={<ChosenCountry />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
