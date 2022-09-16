import React,{Component} from 'react'
import './App.css';
import {CardList} from './component/card-list/card-list.component';

class App extends Component{
  constructor(){
    super()
    this.state = {
      monsters : [],
      searchCatch : ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((data)=>this.setState({monsters : data}))
  }
  render(){
    return (
      <div className="App">
        <input type="search" placeholder='search monster' onChange={e=>{this.setState({searchCatch : e.target.value},()=> console.log(this.state))}} />
        <CardList grpOfMonsters = {this.state.monsters}>

        </CardList>
      </div>
    );
  }
}

export default App;
