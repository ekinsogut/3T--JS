
var game = {
  isClicked: false,
  crossGame: `<i class="fab fa-maxcdn"></i>`,
  roundGame: `<i class="fab fa-tumblr"></i>`,
  cross: [],
  round: [],
  winning_array: [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
};

var output = document.getElementById("output");


function getData(data, which_game, player) {
  var box = data.getAttribute("data-box");

  if (!game.isClicked) {
    game.cross.push(box);
  } else if (game.isClicked) {
    game.round.push(box);
  }

  data.removeAttribute("onclick");
  control(which_game, player);
}


function valuexox(data) {
  if (!game.isClicked) {
    data.innerHTML = game.crossGame;
    getData(data, game.cross, game.crossGame);
    game.isClicked = !game.isClicked;
  } else if (game.isClicked) {
    data.innerHTML = game.roundGame;
    getData(data, game.round, game.roundGame);
    game.isClicked = !game.isClicked;
  }
}


function control(arr, player) {
  var comp = arr.map(val => parseInt(val, 10)).sort();
  console.log(comp);
  for (var i = 0; i < game.winning_array.length; i++) {
    if (
      comp.includes(game.winning_array[i][0]) &&
      comp.includes(game.winning_array[i][1]) &&
      comp.includes(game.winning_array[i][2])
    ) {
      document.getElementById("outGrid").classList.add("disable");
      output.innerHTML = `${player} wins the Game.<br/> Refresh to play Again <br/> <button onclick=window.location.reload();>Refresh</button>`;
    }
  }
  if (game.cross.length + game.round.length == 9) {
    output.innerHTML = `Game Draw`;
  }
}


const reload = () => {
  window.location.reload;
};
