const CHARACTERS_ENDPOINT = "https://rickandmortyapi.com/api/character";
const LOCATIONS_ENDPOINT = "https://rickandmortyapi.com/api/location";
const EPISODES_ENDPOINT = "https://rickandmortyapi.com/api/episode";

const charactersPromise = axios.get(CHARACTERS_ENDPOINT);
const locationsPromise = axios.get(LOCATIONS_ENDPOINT );
const episodesPromise = axios.get(EPISODES_ENDPOINT);

Promise.all([charactersPromise, locationsPromise, episodesPromise]).then(data => console.log(data))


const getData = async() => {
  const characters = await axios.get(CHARACTERS_ENDPOINT);
  const locations = await axios.get(LOCATIONS_ENDPOINT);
  const episodes = await axios.get(EPISODES_ENDPOINT);

  return [ characters, locations, episodes ];
};

getData().then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err)
});

console.log('final')

//ASYNC AND PROMISE ALL

const getDataEx = async() => {
  const charactersPromise = axios.get(CHARACTERS_ENDPOINT);
  const locationsPromise = axios.get(LOCATIONS_ENDPOINT);
  const episodesPromise = axios.get(EPISODES_ENDPOINT);

  return await Promise.all([charactersPromise, locationsPromise, episodesPromise]);
}

getDataEx().then(data => {
  console.log(data);
})
.catch(err => {
  console.log(err)
})