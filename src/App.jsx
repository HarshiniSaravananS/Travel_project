import { Routes, Route } from "react-router-dom";

import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import LoginSignUp from "./routes/LoginSignUp";
import Service from "./routes/Service";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sign up" element={<LoginSignUp/>  } />
      </Routes>
    </div>
  );
}
