//import logo from './logo.svg';
// import { Component } from "react"

import { useState, useEffect, ChangeEvent } from "react";

import CardList from "./Components/Card-list/card-list.component";
import SearchBox from "./Components/Search-box.js/search-box.component";
import { getData } from "./utils/data.utils";
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [title, setTitle] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {

    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(users)
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster)   => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange =  (event: ChangeEvent<HTMLInputElement>): void => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange =  (event: ChangeEvent<HTMLInputElement>): void => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }


  return(
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox 
        className = 'monsters-search-box'
        onChangeHandler = {onSearchChange} 
        placeholder = 'Search Monster' 
      />
      <br />
      <SearchBox 
        className = 'title-search-box'
        onChangeHandler = {onTitleChange} 
        placeholder = 'set title' 
      />



    <CardList monsters={filteredMonsters} /> 
    </div>
  )
}

// class App extends Component {

//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     }
//     //console.log("constructor")
//   };

//   componentDidMount() {
//     //console.log("componentDidMount")
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then( response => response.json())
//       .then( (users) => this.setState(() => {
//         return {monsters: users };
//       }, 
//       // () => {
//       //   console.log(this.setState)
//       // }
//       ))
//   }

//   onSearchChange = (event) => { 
//     //console.log({ startingArray: this.state.monsters });
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
    
//     this.setState(() => {
//       return { searchField };
//     })
//   }

//   render() {
//     // console.log("render")

//     const {monsters, searchField } = this.state;
//     const { onSearchChange } = this

//     const filteredMonsters = monsters.filter((monster)   => {
//         return monster.name.toLocaleLowerCase().includes(searchField);
//       });

//     return (
//       <div className="App">
//         <h1 className="app-title"> Monsters Rolodex</h1>
//         {
//           // filteredMonsters.map((monster, key) => {
//           //   return <div key={key}><h1 >{monster.name}</h1></div>
//           // }) 
//         }
//         <SearchBox 
//           className = 'monsters-search-box'
//           onChangeHandler = {onSearchChange} 
//           placeholder = 'Search Monster' 
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
