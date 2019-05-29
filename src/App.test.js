import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('filters by letter', (h) => {
  return (App.filterValue === "h" && App.state.filteredCharacters.length === 8)
});
