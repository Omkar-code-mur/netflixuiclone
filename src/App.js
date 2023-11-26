/** @format */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Componants/Home/Home";
import Header from "./Componants/Header/Header";
import "./App.scss";

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Home />} />
          <Route path='/tvShows' element={<Home />} />
          <Route path='/recentlyAdded' element={<Home />} />
          {/* <Route path="/" element={<Home/>}/>
          <Route path="/" element={<Home/>}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
