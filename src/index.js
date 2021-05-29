import './index.scss';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

// API requires 1 fetch before responding for some reason
fetch(`https://api.rawg.io/api/games/5?key=3a4e64a027444e258be25283e5bd967a`);
//
/*
details of the game - 
1: game art
2: info - name, released, playtime, twitch count, youtube count, platforms > requirements, metacritic link

3: screenshots

bottom: stores that sell the game - https://api.rawg.io/api/games/{game_pk}/stores


*if time allows it - some SteamWorks stats

*/

const btn = document.querySelector('.input-btn');
const allInfo = document.querySelector('.game-info');
const inputForm = document.querySelector('.input-form');

// fetching game's data, putting it into renderGame function
const getGameData = function (game) {
  return fetch(
    `https://api.rawg.io/api/games?key=3a4e64a027444e258be25283e5bd967a&search_precise=true&search="${game}"`,
  )
    .then(response => response.json())
    .then(data => {
      return data;
    })

    .catch(err => console.log(`error: ${err}`));
};

// rendering html with fetched data

const renderGame = function (data) {
  console.log(data.results[0].id); // temp for DEV !!!
  const gameID = data.results[0].id;
  //fetching by ID test
  fetch(
    `https://api.rawg.io/api/games/${data.results[0].id}?key=3a4e64a027444e258be25283e5bd967a`,
  )
    .then(response => response.json())
    .then(data => {
      console.log(data); // temp for DEV !!!

      let releaseTime;
      if (data.tba === true) {
        releaseTime = 'TBA';
      } else {
        releaseTime = `${data.released} (${dayjs().to(dayjs(data.released))})`;
      }

      let metacriticScore;
      if (data.metacritic === null) {
        metacriticScore = 'Game not found on Metacritic';
      } else {
        metacriticScore = data.metacritic;
      }

      // render html with data and insert it into the DOM
      const html = `
				  <div class="imgtitle">
  
				  <img class="game-art" src=${data.background_image}>
  
				  <div class="art-title">${data.name}</div>
				  </div>
  
				  <div class="info-container">
				  <div class="released">Released: ${releaseTime}</div><br>
  
				  <div class="description"> ${data.description}
				  </div><br>
  
				  <div class="metacritic"> Metacritic score: ${metacriticScore}
				  </div><br>
  
				  <div class="platforms"> Platforms:
				  </div><br>
  
				  <div class="pc-requirements"> Requirements:<br> Minimum: xxx <br>
				  Recommended: xxx <br>
				  </div><br>
  
				  <div class="screenshots">
				  </div><br>
			  `;

      allInfo.insertAdjacentHTML('beforeend', html);

      // insert screenshots into html
      return fetch(
        `https://api.rawg.io/api/games/${gameID}/screenshots?key=3a4e64a027444e258be25283e5bd967a`,
      )
        .then(response => response.json())
        .then(data => {
          console.log(data); ////
          const image = [];
          for (let i = 0; i <= data.results.length && i <= 4; i++) {
            console.log(i); ///////////
            image[i] = document.createElement('img');
            image[i].src = data.results[i].image;
            document.querySelector('.screenshots').appendChild(image[i]);
          }
        });
    });
};

// action on click -> getting name and putting it into getGameData function
inputForm.addEventListener('submit', function () {
  allInfo.innerHTML = ``;
  const gameName = document.querySelector('.game-name').value;
  getGameData(gameName).then(data => renderGame(data));
});
