const charactersPromise = axios.get("https://rickandmortyapi.com/api/character");
const locationsPromise = axios.get("https://rickandmortyapi.com/api/location");
const episodesPromise = axios.get("https://rickandmortyapi.com/api/episode");

Promise.all([charactersPromise, locationsPromise, episodesPromise]).then(data => console.log(data))


const getData = async() => {
  const characters = await axios.get("https://rickandmortyapi.com/api/character");
  const locations = await axios.get("https://rickandmortyapi.com/api/location");
  const episodes = await axios.get("https://rickandmortyapi.com/api/episode");

  return [ characters, locations, episodes ];
};

getData().then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err)
});

console.log('final')
