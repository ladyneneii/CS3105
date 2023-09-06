import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Message from "./components/Message";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Message /> } />
        <Route path="/Feed" element={<Card />} />
      </Routes>
    </Router>
  );
}

export default App;
