import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SelectView from './views/SelectView';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className='content-container'>
      <Navbar>
        <Container>
          <Navbar.Brand>Auto Planner</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<SelectView />} />
      </Routes>
    </div>
  );
}

export default App;
