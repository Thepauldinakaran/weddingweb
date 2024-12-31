// src/App.jsx
import React from "react";
import Hero from "./component/Hero";

import CornerNav from "./component/CornerNav"; // Import the HomeSlider component
import About from "./component/About";

function App() {
  return (
    <div>
      <CornerNav />
      <Hero />
      <About /> {/* Add the HomeSlider component here */}
    </div>
  );
}

export default App;
