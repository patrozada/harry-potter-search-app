import React from 'react';

class Filters extends React.Component{
  render (){
    const {methodInputchange} =this.props;
    return(
      <div>
        <label htmlFor="search"></label>
        <input onChange = {methodInputchange} type="text" placeholder="Write a name..."/>
      </div>
    )
  }
}
export default Filters;