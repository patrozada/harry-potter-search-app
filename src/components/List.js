import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function List(props) {
	const { characterDefaultList, characterFilteredList } = props;
	return (
		<ul className='results--container'>
			<h3 className='results--info'>{`You are seeing ${characterFilteredList.length} out of ${characterDefaultList.length} charachters`}</h3>
			{characterFilteredList.map((character, index) => (
				<li key={character.uuid} className='results--item'>
					<Link to={`/detail/${character.uuid}`}>
						<Card
							name={character.name}
							house={character.house}
							src={character.image}
							id={character.uuid}
						/>
					</Link>
				</li>
			))}
		</ul>
	);
}
export default List;

List.propTypes={
	value:PropTypes.string.isRequired,
	characterDefaultList:PropTypes.arrayOf(PropTypes.object),
	characterFilteredList:PropTypes.arrayOf(PropTypes.object)
}
