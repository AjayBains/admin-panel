import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Valet from './components/valet/Valet.jsx'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="headerr">
          <Header/>
        </div>
      
      <div className="sidebar">
        <Sidebar/>
      </div>
      <Switch>
        <Route path ="/" exact>
          <div className="valet">
            <Valet/>
          </div>

        </Route>
         

      </Switch>
     
      

      
      </div>
    </Router>
  );
}

export default App;
