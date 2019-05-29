import React from "react";
import { fetchInfo } from "./services/fetch";
import MainPage from "./components/MainPage";
import DetailCard from "./components/DetailCard";
import { Route, Switch } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			allCharacters: [],
			filterValue: "",
			filterWandValue:"",
			filteredCharacters: []
		};
		this.getData = this.getData.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputNumberChange= this.handleInputNumberChange.bind(this)
	}

	getData() {
		fetchInfo().then(characters =>
			this.setState({
				allCharacters: characters.map((character, index) => {
					return {
						...character,
						name: character.name.toLowerCase(),
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
	filterWandLength(len){
		const { allCharacters, filterValue} = this.state;
		const filteredCharacters = allCharacters
			.filter(character=> character.name.includes(filterValue))
			.filter(character => character.wand.length <= len);
			return filteredCharacters
	}
	handleInputChange(event) {
		const newFilterValue = event.currentTarget.value.toLowerCase();

		this.setState(prevState => {
			return {
				...prevState,
				filterValue: newFilterValue,
				filteredCharacters: this.filterData(newFilterValue)
			};
		});
	}
	handleInputNumberChange(event){
		const newFilterWandValue = event.target.value;
		this.setState({filterWandValue:newFilterWandValue,
		filteredCharacters: this.filterWandLength(newFilterWandValue)})
	}
	render() {
		const { allCharacters, filteredCharacters, filterValue, filterWandValue } = this.state;
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
								filterWandValue={filterWandValue}
								methodInputChange={this.handleInputChange}
								methodInputNumberChange= {this.handleInputNumberChange}
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
