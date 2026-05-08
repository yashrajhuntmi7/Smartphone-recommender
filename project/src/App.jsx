import Home from "./component/Home";
import Header from "./component/Header";
import About from "./component/About";

import { Routes, Route } from "react-router-dom";
import Footer from "./component/Footer";

function App() {
  return (
    <div>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

      </Routes>

      <Footer/>

    </div>
  );
}

export default App;