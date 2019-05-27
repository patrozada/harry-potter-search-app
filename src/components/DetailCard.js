import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DetailCard(props) {
	const { characterDefaultList, match } = props;
	const { id } = match.params;
	const selectedChar = characterDefaultList.find(
		character => character.uuid === parseInt(id)
	);
	return selectedChar ? (
		<div className='detail-card--page-wrapper'>
			<div className={'detail-card--container'}>
				<div
					className='detail-card--image'
					style={{ backgroundImage: `url(${selectedChar.image})` }}
				/>
				<div className='detail-card--text'>
					<h4 className='detail-card--text__name'>{selectedChar.name}</h4>
					<h5>
						{"Date of Birth: "}
						{selectedChar.dateOfBirth || "Unknown"}
					</h5>
					<h5>
						{"House: "}
						{selectedChar.house || "Not a member of any house."}
					</h5>
					<h5>
						{"Patronus: "}
						{selectedChar.patronus || "Unknown"}
					</h5>
					<h5 className='detail-card--alive'>
						{"By the end of the saga this character is "}
						{(selectedChar.alive && (
							<i className='detail-card--icon fas fa-heartbeat' />
						)) ||
							(!selectedChar.alive && (
								<i className='detail-card--icon fas fa-skull-crossbones' />
							))}
					</h5>
					<Link to='/'>
						<p className='back'>
							<i className='fas fa-hat-wizard' />
							<i className='fas fa-backward' />
						</p>
					</Link>
				</div>
			</div>
		</div>
	) : (
		<div className='detail-card--page-wrapper'>
			<div>
				<p>Our appologies! Character not found</p>
				<Link to='/'>
					<p className='back'>
						<i className='fas fa-hat-wizard' />
						<i className='fas fa-backward' />
					</p>
				</Link>
			</div>
		</div>
	);
}
export default DetailCard;

DetailCard.propTypes = {
	characterFilteredList: PropTypes.arrayOf(
		PropTypes.shape({
			actor: PropTypes.string,
			alive: PropTypes.bool.isRequired,
			ancestry: PropTypes.string,
			dateOfBirth: PropTypes.string,
			eyeColour: PropTypes.string,
			gender: PropTypes.string,
			hairColour: PropTypes.string,
			hogwartsStaff: PropTypes.bool.isRequired,
			hogwartsStudent: PropTypes.bool.isRequired,
			house: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			patronus: PropTypes.string,
			species: PropTypes.string.isRequired,
			uuid: PropTypes.number.isRequired,
			wand: PropTypes.object,
			yearOfBirth: PropTypes.number
		})
	)
};
