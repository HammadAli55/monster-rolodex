import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx'

// function App() {
//   return(
//     <div>
//       <p>Lol</p>
//     </div>
//   )
// }

class App extends Component {
  constructor(){
    super();
    // this.state = {
    //   string: "Hammad"
    // }
    this.state = {
      monsters : []
    }
  }

  componentDidMount() {
    //fetch return promise
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() {
    return(
      <div>
        <CardList monsters = {this.state.monsters}/>
      </div>
      )
  }

}

export default App;
