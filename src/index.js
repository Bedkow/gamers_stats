import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

/*
details of the game - 
1: game art
2: info - name, released, playtime, twitch count, youtube count, platforms > requirements, metacritic link

3: screenshots

bottom: stores that sell the game - https://api.rawg.io/api/games/{game_pk}/stores

*/

const btn = document.querySelector(".input_btn");
const all_info = document.querySelector(".game_info");
const inputForm = document.querySelector('#inputForm');
const gameName = document.querySelector('#gameName')

const renderGame = function (data) {
	//get current time
	let [currentMonth, currentDate, currentYear] = new Date()
		.toLocaleDateString("en-US")
		.split("/");

	// //get release time

	let releaseTime = data.results[0].released;
	let [releaseYear, releaseMonth, releaseDay] = releaseTime.split("-");

	// get total time passed

	// let totalTimePassed = dayjs(
	// 	`${currentYear}-${currentMonth}-${currentDate}`
	// ).fromNow();

	const html = `
    <div class="imgtitle">
    <img class="game_art" src=${data.results[0].background_image}>
    <div class="art_title">${data.results[0].name}</div>
    </div>
    <div class="info_container">
    <div>Released: ${data.results[0].released} (${dayjs().to(dayjs(releaseTime))})<br></div>
 `;

	all_info.insertAdjacentHTML("beforeend", html);
};

const getGameData = function (game) {
	fetch(
		`https://api.rawg.io/api/games?key=3a4e64a027444e258be25283e5bd967a&search_precise=true&search="${game}"`
	)
		.then((response) => response.json())
		.then((data) => {
			renderGame(data);
		})
		.catch((err) => console.log(`error: ${err}`));
};

btn.addEventListener("click", function () {
	let gameName = document.querySelector('#gameName').value;
	getGameData(gameName);
});