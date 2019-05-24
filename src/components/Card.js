import React from 'react';

class Card extends React.Component{
  render (){
    const {name, src, house, id}=this.props
    return(
      <div>
        <h4>{name}</h4>
        <img src={src} alt={name}/>
        <h5>{house}</h5>
      </div>
    )
  }
}
export default Card;