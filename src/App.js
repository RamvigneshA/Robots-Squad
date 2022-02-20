import './App.css';
import React, { Component } from 'react';
import { Cardlist } from './components/card-list/cards-list -component';
import { Search } from '../src/components/search-card/search.card'

class App extends Component{
  constructor(){
  super();
  this.state={
    monsters:[],
    searchfield:''
  };

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }
  render(){
    const {monsters , searchfield} = this.state;
    const filteredmonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()));

    return(
     
      <div className="App">
        <h2>Robotos Squad</h2>
        <Search 
        placeholder='search robots..' 
        handlechange={e => {this.setState({ searchfield: e.target.value});}}/>
        <Cardlist monsters={filteredmonsters}></Cardlist>
       </div>
    
    );
    
    }
}

export default App;
