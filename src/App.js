import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Login from './components/login';
import Friendlist from './components/friendlist';
import AddFriend from './components/addfriend';
import Logout from './components/logout';
import PrivateRoute from './components/privateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Friend$ D@t@b@5e</h2>
          <button>
          <Link to='/login'>Login</Link>
          </button>      
          
          <button>
          <Link to="/logout">Logout</Link>
          </button>

          <button>
          <Link to="/friends">Friendlist</Link>
          </button>

          <button>
          <Link to="/friends/add">Addfriend</Link>
          </button>

        <Switch>
          <PrivateRoute path = '/friends/add' component={AddFriend}/>
          <Route path='/logout' component={Logout}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute exact path='/friends' component={Friendlist}/>
          <Route path='/' component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
