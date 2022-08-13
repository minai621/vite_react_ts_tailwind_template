import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log(window.location);
  return (
    <div className="App">
      <div className="text-3xl font-bold underline text-blue-500">hello</div>
      <Routes>
        <Route
          path="/"
          element={<div className="text-red-500">Home</div>}
        ></Route>
        <Route path="/hi" element={<div>hello</div>}></Route>
        <Route path="/*" element={<div>error</div>}></Route>
      </Routes>
    </div>
  );
}

export default App;
