import React from 'react';
import Card from './Card';

class List extends React.Component{
  render (){
    const {characterList}=this.props;
    return(
      <ul>
        {characterList.map((character, index) =>
        <li key = {index +1}>          
          <Card 
            name = {character.name}
            house = {character.house}
            src = {character.image}
            id = {index +1}
          />
        </li>
        )}
        

      </ul>
    )
  }
}
export default List;