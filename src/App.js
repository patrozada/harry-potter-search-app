import React from 'react';
import MainPage from './components/MainPage'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters : []
    }
    this.getData = this.getData.bind(this);
    this.getData();
  }
  getData(){
    fetch('http://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(characters =>
        this.setState({
          characters: characters
        }))
  }

  render() {
    return (
      <div className="App">
        <MainPage
          characterList = {this.state.characters}
        />
      </div>
    );
  }
}

export default App;
