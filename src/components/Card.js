import React from "react";
import "./Card.scss";

function Card(props) {
	const { name, src, house } = props;
	return (
		<div>
			<h4>{name}</h4>
			<div
				className='imageContainer'
				style={{ backgroundImage: `url(${src})` }}
			/>
			<h5>{house}</h5>
		</div>
	);
}
export default Card;
