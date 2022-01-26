import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import Friendlist from './components/friendlist';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
          <button>
          <Link to='/login'>Login</Link>
          </button>      
          
          <button>
          <Link to="/logout">Logout</Link>
          </button>

          <button>
          <Link to="/friendlist">Friendlist</Link>
          </button>

          <button>
          <Link to="/addfriend">Addfriend</Link>
          </button>


        
        <Switch>
          <Route path='/' component={Login}/>
          <Route path='/login' component={Login}/>
          <Route path='/friendlist' component={Friendlist}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
