import React from 'react';

class Filters extends React.Component{
  render (){
    const {methodInputchange, value} =this.props;
    return(
      <div>
        <label htmlFor="search"></label>
        <input onChange = {methodInputchange} type="text" placeholder="Escribe un nombre"/>
      </div>
    )
  }
}
export default Filters;