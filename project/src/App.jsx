import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </div>
  );
}

export default App;