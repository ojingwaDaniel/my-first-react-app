import React,{Component} from 'react'
import './App.css';
import {CardList } from './component/card-list/card-list.component';

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
        <CardList attribute = 'omo we must keep improving'/>
        {
          this.state.monsters.map(monster=> <h1 key={monster.id}>{monster.name}</h1>)

        }
      </div>
    );
  }
}

export default App;
