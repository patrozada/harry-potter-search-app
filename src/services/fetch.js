const ENDPOINT = 'https://hp-api.herokuapp.com/api/characters/'

const fetchInfo = () => fetch(ENDPOINT).then(response=>response.json());

export {fetchInfo}