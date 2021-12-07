const getCharacters = () => {
  return fetch('https://ancient-refuge-00089.herokuapp.com/characters')
  .then(data => data.json())
  .catch(e => console.log(e)); // handle error
}

const getCharacter = (characterId = '') => {
  return fetch(`https://ancient-refuge-00089.herokuapp.com/characters/${characterId}`)
  .then(data => data.json())
  .catch(e => console.log(e)); // handle error
}

export {
  getCharacters,
  getCharacter
}