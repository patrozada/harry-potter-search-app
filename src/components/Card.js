import React from "react";
import "./Card.scss";

class Card extends React.Component {
	render() {
		const { name, src, house } = this.props;
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
}
export default Card;
