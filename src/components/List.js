import React from "react";
import Card from "./Card";

class List extends React.Component {
	render() {
		const { characterDefaultList, characterFilteredList } = this.props;
		return characterFilteredList.length === 0 ? (
			<ul>
				{characterDefaultList.map((character, index) => (
					<li key={index + 1}>
						<Card
							name={character.name}
							house={character.house}
							src={character.image}
							id={index + 1}
						/>
					</li>
				))}
			</ul>
		) : (
			<ul>
				{characterFilteredList.map((character, index) => (
					<li key={index + 1}>
						<Card
							name={character.name}
							house={character.house}
							src={character.image}
							id={index + 1}
						/>
					</li>
				))}
			</ul>
		);
	}
}
export default List;
