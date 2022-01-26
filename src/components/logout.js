import React from "react";
import axios from "axios";

class Logout extends React.Component{
  componentDidMount(){
    
    axios.post('http://localhost:9000/api/logout', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    
    .then(res => {
      
    localStorage.removeItem('token');
    this.props.history.push('/login');
  })
    .catch(err =>{
      console.log(err);
    })
  }
  render(){
    return(<div>You have been logged out</div>)
  }
}

export default Logout;