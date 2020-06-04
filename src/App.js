import React from 'react';
import './App.css';
import ProductsTable from './components/Table/Table';
import Heading from './components/Heading/Heading';

function App() {
  return (
    <div className="App">
      <Heading />
      <ProductsTable></ProductsTable>
    </div>
  );
}

export default App;
