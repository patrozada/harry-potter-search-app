import React from 'react';
import './Card.scss';

class DetailCard extends React.Component{
  render (){
    const {characterDefaultList, match}=this.props
    const {id} = match.params
    const selectedChar = characterDefaultList.find(character=>character.uuid === parseInt(id))
    return(selectedChar)?(
      <div>
        Ayyyyy
        <h4>{selectedChar.name}</h4>
        <div className="imageContainer" style={{backgroundImage:`url(${selectedChar.image})`}}/>  
        <h5>{selectedChar.house}</h5>
        <h5>patronus:{selectedChar.patronus}</h5>
        <h5>{selectedChar.alive}</h5>
      </div>
    ) : (
      <p>Our appologies! Character not found</p>
    )
  }
}
export default DetailCard;