import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Error from "./pages/Error";
import About from "./pages/About";
import Rent from "./pages/Rent";

function App() {
  return (
    <Router>
      <div id="global">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Rent />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
