import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { API_URL } from './utils/constant';

function App() {
  const a = process.env.REACT_APP_API_URL
  console.log(process.env.REACT_APP_API_URL)
  console.log(process.env.MY)

  return (
    <div className="App">
      <div>{a}</div>
    </div>
  );
}

export default App;
