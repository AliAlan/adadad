let games = [
  {
    id: 1,
    gameName: "Horizon",
    img: "./images/horizon.webp",
    category: "singleplayer",
  },
  {
    id: 2,
    gameName: "Assassin's Creed",
    img: "./images/ac.png",
    category: "singleplayer",
  },
  {
    id: 3,
    gameName: "Batman",
    img: "./images/batman.jpg",
    category: "singleplayer",
  },
  {
    id: 4,
    gameName: "Battlefield V",
    img: "./images/bf.jpg",
    category: "multiplayer",
  },
  {
    id: 5,
    gameName: "Elden Ring",
    img: "./images/eldenring.webp",
    category: "singleplayer",
  },
  {
    id: 6,
    gameName: "Fifa",
    img: "./images/fifa.webp",
    category: "sport",
  },
  {
    id: 7,
    gameName: "GTA",
    img: "./images/gta.jpg",
    category: "multiplayer",
  },
  {
    id: 8,
    gameName: "Halo",
    img: "./images/halo.webp",
    category: "multiplayer",
  },
  {
    id: 9,
    gameName: "Last of Us",
    img: "./images/lastofus.webp",
    category: "singleplayer",
  },
  {
    id: 10,
    gameName: "Humankind",
    img: "./images/humakind.jpg",
    category: "strategy",
  },
  {
    id: 11,
    gameName: "Moto GP",
    img: "./images/moto-gp.jpg",
    category: "sport",
  },
  {
    id: 12,
    gameName: "Tomb Raider",
    img: "./images/tombr.jpg",
    category: "singleplayer",
  },
  {
    id: 13,
    gameName: "UFC",
    img: "./images/ufc.webp",
    category: "sport",
  },
  {
    id: 14,
    gameName: "Witcher 3",
    img: "./images/witcher.webp",
    category: "singleplayer",
  },
  {
    id: 15,
    gameName: "World of Tanks",
    img: "./images/wot.jpg",
    category: "multiplayer",
  },
];
const gamesContainer = document.querySelector(".games-container");
const btns = document.querySelectorAll(".btn");
window.addEventListener("DOMContentLoaded", function () {
  displayGameItems(games);
});
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.category;
    const gameCategory = games.filter(function (gameItem) {
      if (gameItem.category === category) {
        return gameItem;
      }
    });
    if (category === "all") {
      displayGameItems(games);
    } else {
      displayGameItems(gameCategory);
    }
  });
});
function displayGameItems(gameItems) {
  let displayGames = gameItems.map(function (item) {
    return ` <div class="game">
        <div class="game-img"><img src=${item.img} alt="${item.gameName}" /></div>
        <div class="game-info"><h3>${item.gameName}</h3></div>
      </div>`;
  });
  displayGames = displayGames.join("");
  gamesContainer.innerHTML = displayGames;
}
