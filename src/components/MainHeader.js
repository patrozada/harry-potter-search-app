import React from 'react';
import Hogwarts from '../services/images/hogwarts-tablet.png';
import Logo from '../services/images/harry-potter.png';

class MainHeader extends React.Component{
  render (){
    return(
      <div className='main-header--container'>
        <div className='main-header--moon'></div>
        <div className='main-header--logo' style={{ backgroundImage: `url(${Logo})`}}></div>
        <div className='main-header--hogwarts' ></div>
      </div>
      
      )
  }
}
export default MainHeader;
// style={{ backgroundImage: `url(${Hogwarts})` }}