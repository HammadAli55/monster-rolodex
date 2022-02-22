import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
// class component
class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFiled: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}))
  }
  
  render() {
    return (
      // JSX code
      <div className='App'>
        <input type='search' placeholder='search monster' onChange={ e => 
            this.setState({searchFiled: e.target.value}) 
        }/>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }

}

// functional component
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
