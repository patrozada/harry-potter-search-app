import React from 'react';
import Card from './Card';

class List extends React.Component{
  render (){
    const {characterList}=this.props;
    return(
      <ul>
        {characterList.map((character, index) =>
        <li>
          <h4>{character.name}</h4>
          
        </li>
        )}
        

      </ul>
    )
  }
}
export default List;