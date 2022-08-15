import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }

  //componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
  //Initialization that requires DOM nodes should go here.
  componentDidMount() {
    //fetch return promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
    // setState() schedules an update to a component's state object. When state changes, the component responds by re-rendering.
  }

  render() {
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className = 'App'>
        <input type = "search" placeholder = "Search Monsters" 
          onChange = {e => {
            this.setState({searchField: e.target.value}, () => this.state)
          }}/>
        <CardList monsters = {filterMonsters}/>
      </div>
      )
  }
}

export default App;