import React from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { useGetDataQuery } from './services/everythingApi';

function App() {
  const {data:data} = useGetDataQuery('bitcoin')
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
