import React,{Component} from 'react'
import './App.css';
import {CardList} from './component/card-list/card-list.component';
import { SearchBox } from './component/search-box/search-box.component';
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
  changeHandler = e=>{
    this.setState({ searchCatch: e.target.value });
  }
  render(){
    const{monsters,searchCatch} = this.state
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchCatch.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monster"
          changeHandler={this.changeHandler}
        />
        <CardList grpOfMonsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
