import React from "react";
import MainHeader from "./MainHeader";
import Filters from "./Filters";
import List from "./List";

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
