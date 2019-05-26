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
		<div className='detail-card'>
			<div
				className='detail-card--image'
				style={{ backgroundImage: `url(${selectedChar.image})` }}
			/>
			<div className='detail-card--text'>
				<h4>{selectedChar.name}</h4>
				<h5>{selectedChar.house}</h5>
				<h5>patronus:{selectedChar.patronus}</h5>
				<div className='detail-card--interactive'>
					<h5 className='detail-card--interactive__icon'><i class="fas fa-heartbeat"></i><i class="fas fa-skull-crossbones"></i>{selectedChar.alive}</h5>
					<Link to='/'>
						<button type='button'>Back to Home</button>
					</Link>
				</div>
			</div>
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
