//list of cells elements
var squares = document.querySelectorAll('td');

var game = {piece: [[0,0,0], [0, 0, 0]]};

var player;

var togglePlayer = () => {
  if(player) {
    player = false;
  } else {
    player = true;
  }
};

//event listener to mark an X on cells when clicked
squares.forEach( (square) =>{
  square.addEventListener("click", (event) => {
    if(!event.target.innerText) {
      if(player) {
        togglePlayer();
        event.target.innerText = 'X';
      } else {
        togglePlayer();
        event.target.innerText = 'O';
      }
    }
  });
});

//event listener for reset button
var button = document.querySelector('button');
button.addEventListener("click", (event) => {
  player = false;
  squares.forEach( (square) => {
    square.innerText = null;
    console.log(square.innerText);
  })
});