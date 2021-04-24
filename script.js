// calling api for the token // IGDB - changed to RAWG

// const request = new XMLHttpRequest();
// request.open('post', 'https://id.twitch.tv/oauth2/token?client_id=i25d2b6uznq4n2bgee8dqcescn4xo3&client_secret=q0xyh3l1vjht6w6mx21egqlhyov51m&grant_type=client_credentials')

// request.send();

// request.addEventListener('load', function() {
// const data = JSON.parse(this.responseText);
// console.log(data);
// });

/* 
details of the game - 
1: game art
2: info - name, released, playtime, twitch count, youtube count, platforms > requirements, metacritic link

3: screenshots

bottom: stores that sell the game - https://api.rawg.io/api/games/{game_pk}/stores

*/

// calling RAWG

// const request = new XMLHttpRequest();
// request.open('get', 'https://api.rawg.io/api/games?key=bcfe18881b8345c89b572cdb49c10987&search_precise=true&search="valheim"')

// request.send();

// request.addEventListener('load', function() {
// const data = JSON.parse(this.responseText);
// console.log(data);
// });

// calling RAWG using promises like a civilised dev

fetch(
	'https://api.rawg.io/api/games?key=bcfe18881b8345c89b572cdb49c10987&search_precise=true&search="valheim"'
)
	.then((response) => response.json())
	.then((data) => console.log(data));

const btn = document.querySelector(".input_btn");
// const art = document.querySelector('.game_art');
// const info = document.querySelector('.info_container');
// const screenshots = document.querySelector('.screenshots_container');
// const stores = document.querySelector('.stores');
const all_info = document.querySelector(".game_info");

const renderGame = function (data) {
	const html = `
    <img class="game_art" src=${data.results[0].background_image}></div>
    <div class="info_container">
    <div>Name: ${data.results[0].name}</div>
    <div>Released: ${data.results[0].released}</div>
    <div>Playtime?</div>
    <div>Twitch count?</div>
    <div>YT count?</div>
    <div>Platforms:</div>
    <div>Requirements:</div>
    <div>Metacritic link:</div>
    <div>Screenshots:</div>
    <div>Stores:</div>
    <div></div>
    </div>
    <div class="screenshots_container"></div>
    <div class="stores"></div>
    `;

	all_info.insertAdjacentHTML("beforeend", html);
};

const getGameData = function (game) {
	fetch(
		`https://api.rawg.io/api/games?key=bcfe18881b8345c89b572cdb49c10987&search_precise=true&search="${game}"`
	)
		.then((response) => response.json())
		.then((data) => {
			renderGame(data);
		})
		.catch((err) => console.log(`error: ${err}`));
};

btn.addEventListener("click", function () {
	getGameData("valheim");
});
