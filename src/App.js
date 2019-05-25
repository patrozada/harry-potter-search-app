import React from "react";
import {fetchInfo} from './services/fetch'
import MainPage from "./components/MainPage";
import DetailCard from "./components/DetailCard";
import { Route, Switch } from "react-router-dom";
import "./App.css";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allCharacters: [],
			filterValue: "",
			filteredCharacters: []
		};
		this.getData = this.getData.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.getData();
	}

	getData() {
		fetchInfo()
			.then(characters =>
				this.setState({
					allCharacters: characters.map((character,index)=>{
						return{
							...character,
							uuid:index + 1,
						}
					})
				})
			);
	}

	filterData(filter) {
		const { allCharacters } = this.state;
		const filteredCharacters = allCharacters.filter(character =>
			character.name.includes(filter)
		);
		return filteredCharacters;
	}

	handleInputChange(event) {
		const newFilterValue = event.currentTarget.value;
		this.setState(prevState => {
			return {
				...prevState,
				filterValue: newFilterValue,
				filteredCharacters: this.filterData(newFilterValue)
			};
		});
	}

	render() {
		return (
			<div className='App'>
				<Switch>
          <Route 
            exact path='/' 
            render = {routerProps => (
              <MainPage 
                match = {routerProps.match}
                characterDefaultList={this.state.allCharacters}
                characterFilteredList={this.state.filteredCharacters}
                value={this.state.filterValue}
                methodInputchange={this.handleInputChange}
              />
            )}
           />
					<Route
						path= '/detail/:id'
						render = {routerProps => (
							<DetailCard
								match = {routerProps.match}
								characterDefaultList={this.state.allCharacters}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;