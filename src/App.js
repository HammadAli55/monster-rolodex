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

  componentDidMount() {
    //fetch return promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return(
      <div className='App'>
        <input type="search" placeholder="Search Monsters" 
          onChange={e => {
            this.setState({searchField: e.target.value}, () => this.state)
          }}/>
        <CardList monsters = {filterMonsters}/>
      </div>
      )
  }
}

export default App;
