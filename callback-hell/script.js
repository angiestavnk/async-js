const RICK_AND_MORTY_CHARACTERS = "https://rickandmortyapi.com/api/character";

const btn = document.getElementById('get-data');
const humansList = document.getElementById('humans-list');
const image = document.createElement("img");

const fetchData = (url, callback) => {
  fetch(url).then(response => {
    if(!response.ok) {
      throw new Error();
    }
    return response.json();
  })
  .then(data => {
    callback(data)
  })
};

const getAliveCharacters = (data, callback) => {
  const { results } = data;
  const aliveCharacters = results.filter(item => item.status === 'Alive');

  callback(aliveCharacters);
};

const getAliveHumanCharacter = (data, callback) => {
  const humanCharacters = data.filter(item => item.species === 'Human');

  callback(humanCharacters);
}

const showCharacters = (data, callback) => {
  const listItems = data.map(item => {
    console.log(item)
    return (
      `<li>
        <div>${item.name}</div>
        <div>${item.status}</div>
        <img src="${item.image}">
      </li>`
    );
  }).join('');
  humansList.innerHTML = listItems;

  if(listItems.length > 0) {
    callback("Successfully done");
  } else {
    callback("Error was occured");
  }
};

const callBackHellExample = () => {
  fetchData(RICK_AND_MORTY_CHARACTERS, (firstStepData) => {
    getAliveCharacters(firstStepData, (dataFromSecondStep) => {
      getAliveHumanCharacter(dataFromSecondStep, (dataFromThirdStep) => {
        showCharacters(dataFromThirdStep, (status) => {
          console.log(status);
        })
      })
    })
  })
};

btn.addEventListener('click', callBackHellExample)
