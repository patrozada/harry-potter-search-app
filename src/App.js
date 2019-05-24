import React from 'react';
import MainPage from './components/MainPage'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allCharacters :[],
      filterValue :'',
      filteredCharacters:[],
    }
    this.getData = this.getData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getData()
  }

  getData(){
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(characters =>
        this.setState({
          allCharacters: characters
        }))
  }

  filterData(){
    const { allCharacters, filterValue } = this.state;
    const filteredCharacters = allCharacters.filter(character => character.name.includes(filterValue))
    return filteredCharacters
  }

  handleInputChange(event){
    const newFilterValue = event.currentTarget.value;  
    this.setState(prevState =>{
      return{
        ...prevState,
        filterValue:newFilterValue,
        filteredCharacters:this.filterData()
      }
    })
  }

  render() {
    return (
      <div className="App">
        <MainPage
          characterDefaultList = {this.state.allCharacters}
          characterFilteredList = {this.state.filteredCharacters}
          value = {this.state.filterValue}
          methodInputchange = {this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
