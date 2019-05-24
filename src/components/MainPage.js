import React from "react";
import MainHeader from "./MainHeader";
import Filters from "./Filters";
import List from "./List";

class MainPage extends React.Component {
	render() {
		return (
			<React.Fragment>
				<MainHeader />
				<Filters
					methodInputchange={this.props.methodInputchange}
					value={this.props.value}
				/>
				<List
					value={this.props.value}
					characterDefaultList={this.props.characterDefaultList}
					characterFilteredList={this.props.characterFilteredList}
				/>
			</React.Fragment>
		);
	}
}
export default MainPage;
