import React from 'react';
import { AppLayout } from "./Components/AppLayout"
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './Pages/home/HomePage';
function App() {
  return (
    <AppLayout>
      <Route 
      path="/" exact
      component = {HomePage}
      />
       <Route 
      path="/favorites"
      component = {HomePage}
      />
    </AppLayout>
  );
}

export default App;
