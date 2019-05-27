import React from "react";
import MainHeader from "./MainHeader";
import Filters from "./Filters";
import List from "./List";
import PropTypes from 'prop-types';

function MainPage(props) {
	const {
		methodInputChange,
		value,
		characterDefaultList,
		characterFilteredList
	} = props;
	return (
		<main className='main--wrapper'>
			<MainHeader />
			<div className='main--background'>
				<Filters methodInputChange={methodInputChange} value={value} />
				<List
					value={value}
					characterDefaultList={characterDefaultList}
					characterFilteredList={characterFilteredList}
				/>

			</div>
		</main>
	);
}
export default MainPage;

MainPage.propTypes={
	methodInputChange:PropTypes.func.isRequired,
	value:PropTypes.string.isRequired,
	characterDefaultList:PropTypes.arrayOf(PropTypes.object),
	characterFilteredList:PropTypes.arrayOf(PropTypes.object)
}