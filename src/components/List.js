import React from "react";
import Card from "./Card";
import { Link } from 'react-router-dom';

class List extends React.Component {
	render() {
		const { characterDefaultList, characterFilteredList, value} = this.props;
		return (characterFilteredList.length === 0 && !value) || !value ? (
			<ul>
				{characterDefaultList.map((character, index) => (
					<li key={index + 1}>
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
		) : (
			<ul>
				{characterFilteredList.map((character, index) => (
					<li key={character.uuid}>
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
}
export default List;
