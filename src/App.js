import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>

          <Link to='/login'>Login</Link>
          <br/>

          <Link to="/logout">Logout</Link>
        
        <Switch>
          <Route path='login' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
