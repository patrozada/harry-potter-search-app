import React from "react";
import { fetchInfo } from "./services/fetch";
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
	}

	getData() {
		fetchInfo().then(characters =>
			this.setState({
				allCharacters: characters.map((character, index) => {
					return {
						...character,
						name: character.name.toUpperCase(),
						uuid: index + 1
					};
				})
			})
		);
	}
	componentDidMount(){
		this.getData()
	}

	filterData(filter) {
		const { allCharacters } = this.state;
		const filteredCharacters = allCharacters.filter(character =>
			character.name.includes(filter)
		);
		return filteredCharacters;
	}

	handleInputChange(event) {
		const newFilterValue = event.currentTarget.value.toUpperCase();

		this.setState(prevState => {
			return {
				...prevState,
				filterValue: newFilterValue,
				filteredCharacters: this.filterData(newFilterValue)
			};
		});
	}

	render() {
		const { allCharacters, filteredCharacters, filterValue } = this.state;
		return (
			<div className='App'>
				<Switch>
					<Route
						exact
						path='/'
						render={routerProps => (
							<MainPage
								match={routerProps.match}
								characterDefaultList={allCharacters}
								characterFilteredList={filteredCharacters}
								value={filterValue}
								methodInputChange={this.handleInputChange}
							/>
						)}
					/>
					<Route
						path='/detail/:id'
						render={routerProps => (
							<DetailCard
								match={routerProps.match}
								characterDefaultList={allCharacters}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
