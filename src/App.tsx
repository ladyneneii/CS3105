import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";
import Form from "./pages/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Feed" element={<MainPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
