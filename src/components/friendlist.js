import React from "react";
import axios from "axios";


class Friendlist extends React.Component{
  state = {
    friends: []
  };
  componentDidMount(){
    //console.log('comp mounted');
    axios.get('http://localhost:9000/api/friends',{
      headers: {
        authorization: localStorage.getItem('token')
      }
    })
    .then(res => {
      console.log(res.data);
      this.setState({
        friends: res.data
    });
  })
    .catch(err =>{
      console.log(err);
    })
  }


  render(){
    return(
      <div>
        <h1>Friends L1st</h1>
        <p>{
          this.state.friends.map(friend => {
            return <li>{friend.name} , {friend.age}</li>
          })
        }</p>
      </div>
    )
  }
}




export default Friendlist;