import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import SecondPage from "./pages/SecondPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Feed" element={<MainPage />} />
        <Route path="/SecondPage" element={<SecondPage />} />
      </Routes>
    </Router>
  );
}

export default App;
