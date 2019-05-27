import React from "react";
import PropTypes from 'prop-types';

function Card(props) {
	const { name, src, house } = props;
	return (!house) ? (
		<div className='card card--container__hogwarts'>
			<h4 className = 'card--title'>{name}</h4>
			<div
				className='card--image'
				style={{ backgroundImage: `url(${src})` }}
			/>
			<h5 className='card--closing'>Not a member of any house</h5>
		</div>
	) : (
		<div className='card card--container__hogwarts'>
			<h4 className = 'card--title'>{name}</h4>
			<div
				className='card--image'
				style={{ backgroundImage: `url(${src})` }}
			/>
			<h5 className='card--closing'> {`House of ${house}`}</h5>
		</div>
	);
}
export default Card;
const houses = [
	'Gryffindor',
	'Hufflepuff',
	'Ravenclaw',
	'Slytherin',
	''
]
Card.propTypes={
	name: PropTypes.string.isRequired,
	src: PropTypes.string.isRequired,
	house: PropTypes.oneOf(houses).isRequired,
	id: PropTypes.number.isRequired,
}
