import React from "react";
import "./Card.scss";

function Card(props) {
	const { name, src, house } = props;
	return (
		<div className='card card--container__hogwarts'>
			<h4 className = 'card--title'>{name}</h4>
			<div
				className='card--image'
				style={{ backgroundImage: `url(${src})` }}
			/>
			<h5 className='card--closing'> House of {house}</h5>
		</div>
	);
}
export default Card;
