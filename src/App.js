import React,{Component} from 'react'
import './App.css';
import {CardList} from './component/card-list/card-list.component';

class App extends Component{
  constructor(){
    super()
    this.state = {
      monsters : []
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
        <CardList grpOfMonsters = {this.state.monsters}>

        </CardList>
      </div>
    );
  }
}

export default App;
