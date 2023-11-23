import React from "react";
import { Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";

const App = () => {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/get-started" element={<GetStarted />} />
    </Routes>    
  )
}

export default App