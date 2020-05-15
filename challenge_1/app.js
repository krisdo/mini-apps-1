//list of cells elements
var squares = document.querySelectorAll('td');

var Game = function() {

  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.plays = 0;
  this.player = 'X';
  this.row = null;
  this.index = null;

};

Game.prototype.togglePlayer = function () {

  if(this.player === 'O') {
    this.player = 'X';
  } else {
    this.player = 'O';
  }
};

Game.prototype.play = function (id) {

  let empty = false;

  //use id to locate square
  if (id < 3) {
    if (this.board[0][id] === 0) {
      this.row = 0;
      this.index = id;
      this.board[0][id] = this.player;
      this.plays++;
      empty = true;
    }
  } else if (id < 6 && id >= 3) {
    if (this.board[1][id-3] === 0) {
      this.row = 1;
      this.index = id-3;
      this.board[1][id-3] = this.player;
      this.plays++;
      empty = true;
    }
  } else {
    if (this.board[2][id-6] === 0) {
      this.row = 2;
      this.index = id-6;
      this.board[2][id-6] = this.player;
      this.plays++;
      empty = true;
    }
  }

  return empty;
};

Game.prototype.reset = function() {
  this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  this.plays = 0;
  this.player = 'X';
  this.row = null;
  this.index = null;

};


Game.prototype.horizontal = function () {
  //check the whole row
  let count = 0;

  for (var i = 0; i <this.board[this.row].length; i++) {

    if(this.board[this.row][i] === this.player) {
     count++;
    }
  }

  if (count === 3) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.veritcal = function () {
   //check the whole column
  let count = 0;
 
  for(var j = 0; j < this.board.length; j++) {
    // console.log('veritcal square ', this.board[j][this.index], this.player)
    if (this.board[j][this.index] === this.player) {
      count++;
    }
  }
  // console.log('vertical ', this.board, count);
  if (count === 3) {
    return true;
  } else {
    return false;
  }
};
  
Game.prototype.diaganol = function () {
  //check diaganol
  let count = 0;
  let diaganol = this.index - this.row;

  if(diaganol === 0){
    for (var k = 0; k < this.board.length; k++) {
      // console.log('dia square ', this.board[k][k], this.player);
      if(this.board[k][k] === this.player) {
        count++;
      }
    }
  // console.log(Math.abs.diaganol);
  } else if (Math.abs(diaganol) === 2) {
    let index = 0;
    for (var l = this.board.length - 1; l >= 0; l--) {
      // console.log('dia square ', this.board[l][index]);
      if(this.board[l][index] === this.player) {
        // console.log(this.board[l][index]);
        count++;
      }
      index++;
    }
  }

  // console.log('diaganol:', this.board, count);
    if (count === 3) {
      return true;
    } else {
      return false;
    }
};

Game.prototype.tie = function () {

  if (this.plays === 9) {
    return true;
  }
};


var tictactoe = new Game();

var clickEvent = (e) => {
  if(tictactoe.play(event.target.id)) {
    event.target.innerText = tictactoe.player;
    if(tictactoe.veritcal() || tictactoe.horizontal() || tictactoe.diaganol()) {
      setTimeout(() => {alert(`${tictactoe.player} wins!`); }, 100);
      squares.forEach( (square) =>{
        square.removeEventListener("click", clickEvent, false);
      });
    } else if (tictactoe.tie()) {
      setTimeout(() => {alert('Tie!');}, 100);
      squares.forEach( (square) =>{
        square.removeEventListener("click", clickEvent, false);
      });
    }
    setTimeout(() => {tictactoe.togglePlayer(); }, 100);
    
  } else {
    setTimeout(() => {alert('Click Again. Box is occupied'); }, 100); 
  }
};

//event listener to mark an X on cells when clicked
squares.forEach( (square) =>{
  square.addEventListener("click", clickEvent, false);
});

//event listener for reset button
var button = document.querySelector('button');
button.addEventListener("click", (event) => {
  tictactoe.reset();
  squares.forEach( (square) => {
    square.innerText = null;
    square.addEventListener("click", clickEvent, false);
  })
});