import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends React.Component{
  constructor() {
    // super helps us with this by calling contructor
    super();
    this.state = {
      // name : 'Hassan Raza'
      monsters : [
        // {
        //   name: 'Kashan',
        //   id: 5
        
        // },
        // {
        //   name: 'Hammad',
        //   id: 15
        // },
        // {
        //   name: 'Hassann',
        //   id: 25
        // }
      ],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }


  render() {
    // const  monsters = this.state.monsters;
    // const searchField = this.state.searchField;   
    // OR
    const {monsters, searchField} = this.state;
    const filterMonsters = monsters.filter(
      monster => monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className='App'>
        <input 
          type='search' 
          placeholder='search monsters'
          // e present synthetic event  
          onChange={e => this.setState({searchField: e.target.value})}
        >
        </input>
        {/* any param given inside custom component will be a prop */}
        {/* state lives in one place and trickle down as props */}
        <CardList monsters={filterMonsters}>
        {/* <CardList monsters={this.state.monsters}> */}
          {/* props children */}
          {/* {
            this.state.monsters.map(monster=>(
              // key helps react which element has been updated, no need to rerender everything 
              <h1 key = {monster.id}>
                {monster.name}
              </h1>
            ))
          } */}
        </CardList>
      {/* <button onClick={()=> this.setState({name: 'Hammad Ali Shah'})} >Click me!</button> */}
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={logo} className='App-logo' alt='logo' />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className='App-link'
//           href='https://reactjs.org'
//           target='_blank'
//           rel='noopener noreferrer'
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
