import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'; 
import UserComponent from './components/UserComponent';


class App extends Component {
  /*constructor(props){
    super(props); 
    this.state={email: "anonymous"}; 

  }

  changeEmail=(e)=>this.setState({email:e.target.value});
  */
  render() {
    return (
      /*<div className="App">
        <h4>App Component</h4>
        Enter your Email: 
        <input type="email" value={this.state.email} onChange={this.changeEmail}/>
        <Link to={"/contact/"+this.state.email}>Contact Us</Link>
      </div>*/

      <div className="App">
        <UserComponent></UserComponent>
      </div>
    );
  }
 

}

export default App;
