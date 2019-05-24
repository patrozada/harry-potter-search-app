import React from 'react';
import MainHeader from './MainHeader';
import Filters from './Filters';
import List from './List';

class MainPage extends React.Component{
  render(){
    return(
      <React.Fragment>
        'Soy MainPage'
        <MainHeader/>
        <Filters/>
        <List/>
      </React.Fragment>
      
    )
  }
}
export default MainPage;