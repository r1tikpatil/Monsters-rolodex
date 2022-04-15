// import { Component } from "react";
import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("a");
  const [monsters, setMonster] = useState([]);

  console.log("render");

  useEffect(() => {
    console.log("effect fired!");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonster(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filterMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder={"search monster"}
        className={"monsters-search-box"}
      />
      <CardList monsters={filterMonsters} />
    </div>
  );
};

// class App extends Component {
//   state = {
//     monsters: [],
//     searchField: "",
//   };

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             // console.log(this.state);
//           }
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField: searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filterMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder={"search monster"}
//           className={"monsters-search-box"}
//         />
// <CardList monsters={filterMonsters} />
//       </div>
//     );
//   }
// }

export default App;
