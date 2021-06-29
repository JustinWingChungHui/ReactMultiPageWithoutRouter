import './App.css';
import Page1 from './Page1';
import Page2 from './Page2';

import React, { useState } from "react";

function App() {

  const [pageNo, setPageNo] = useState(1); 

  return (
    <div className="App">
    {pageNo === 1 ? <Page1 /> : null }
    {pageNo === 2 ? <Page2 /> : null }

    <button onClick={() => setPageNo(2)}>Next Page</button>
    </div>
  );
}

export default App;
