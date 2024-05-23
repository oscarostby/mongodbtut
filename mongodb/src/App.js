import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './main'; // Assuming this is where your main content resides
import Vid from './vid'; // Assuming this is where your main content resides
import Courses from './courses'; // Assuming this is where your main content resides


function App() {
  useEffect(() => {
    // Initialize Crisp
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "00c87b41-d431-4102-b184-46eef02ac49f";

    // Create a script element
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;

    // Append the script element to the head of the document
    document.head.appendChild(script);

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} /> {/* Use Route with 'element' prop */}
        <Route path="/vid" element={<Vid />} /> {/* Use Route with 'element' prop */}
        <Route path="/courses" element={<Courses />} /> {/* Use Route with 'element' prop */}
        
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
