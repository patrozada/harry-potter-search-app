import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function DetailCard(props) {
	const { characterDefaultList, match } = props;
	const { id } = match.params;
	const selectedChar = characterDefaultList.find(
		character => character.uuid === parseInt(id)
	);
	return selectedChar ? (
		<div>
			<h4>{selectedChar.name}</h4>
			<div
				className='imageContainer'
				style={{ backgroundImage: `url(${selectedChar.image})` }}
			/>
			<h5>{selectedChar.house}</h5>
			<h5>patronus:{selectedChar.patronus}</h5>
			<h5>{selectedChar.alive}</h5>
			<Link to='/'>
				<button type='button'>Back to Home</button>
			</Link>
		</div>
	) : (
		<div>
			<p>Our appologies! Character not found</p>
			<Link to='/'>
				<button type='button'>Back to Home</button>
			</Link>
		</div>
	);
}
export default DetailCard;
