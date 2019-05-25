import React from "react";
import MainHeader from "./MainHeader";
import Filters from "./Filters";
import List from "./List";

class MainPage extends React.Component {
	render() {
		const {
			methodInputChange,
			value,
			characterDefaultList,
			characterFilteredList
		} = this.props;
		return (
			<React.Fragment>
				<MainHeader />
				<Filters methodInputChange={methodInputChange} value={value} />
				<List
					value={value}
					characterDefaultList={characterDefaultList}
					characterFilteredList={characterFilteredList}
				/>
			</React.Fragment>
		);
	}
}
export default MainPage;
