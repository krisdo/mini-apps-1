import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import Rows from './components/Rows.jsx';
import {Container, Row, Col, Button} from 'react-bootstrap';


class ConnectFour extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: null,
      board: [],
      gameover: false
    }
    this.newGame = this.newGame.bind(this);
    this.clickSquare = this.clickSquare.bind(this);
  
    
  }

  togglePlayer(){
    const {currentPlayer} = this.state;
     (currentPlayer === 1) ? 
     this.setState({
        currentPlayer: 2
      }) :
      this.setState({
        currentPlayer: 1
      })
  }

  newGame(){
    let board = [];
      while(board.length < 6) {
        let row = new Array(7).fill(0);
        board.push(row);
      }
      this.setState({
        currentPlayer: 1,
        gameover: false,
        board
      });
      
  }

  checkHorizontal(){
    const {currentPlayer, board} = this.state;
    
    for(let r = 0; r < board.length; r++) {
      let tracking = 0;
      for (let c = 0; c < board[r].length; c++){
        if(board[r][c] === currentPlayer) {
          tracking++;
          if(tracking >= 4) {
            return true;
          }
        } else{
          tracking = 0;
        }
      }    
    }
    
    return false;
  }

  checkVeritcal(){
    const {currentPlayer, board} = this.state;
    for(let c = 0; c < board[0].length; c++) {
      let tracking = 0;
      for (let r = 0; r < board.length; r++) {
        if(board[r][c] === currentPlayer){
          tracking++;
          if(tracking >= 4) {
            return true;
          }
        } else{
          tracking = 0;
        }
      }
    }
    return false;
  }
  checkRightDiagonal(){
    const {currentPlayer, board} = this.state;

    for(let r = 0; r < board.length; r++) {
      for(let c = board[r].length; c > -1; c--) {
        if( c + r === 8 && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c - 1] &&
            currentPlayer === board[r+2][c - 2] &&
            currentPlayer === board[r+3][c - 3] ) {
              return true;
          }
        }
        if( c + r === 7 && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c - 1] &&
            currentPlayer === board[r+2][c - 2] &&
            currentPlayer === board[r+3][c - 3] ) {
              return true;
          }
        }
        if( c + r === 6 && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c - 1] &&
            currentPlayer === board[r+2][c - 2] &&
            currentPlayer === board[r+3][c - 3] ) {
              return true;
          }
        }
        if( c + r === 5 && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c - 1] &&
            currentPlayer === board[r+2][c - 2] &&
            currentPlayer === board[r+3][c - 3] ) {
              return true;
          }
        }
        if( c + r === 4 && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c - 1] &&
            currentPlayer === board[r+2][c - 2] &&
            currentPlayer === board[r+3][c - 3] ) {
              return true;
          }
        }
        if( c + r === 3 && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r +1][c - 1] &&
            currentPlayer === board[r+2][c - 2] &&
            currentPlayer === board[r+3][c - 3] ) {
              return true;
          }
        }
        
      }
    }

    return false;
  }

  checkLeftDiagonal(){
    const {currentPlayer, board} = this.state;

    for(let r = 0; r < board.length; r++) {
      for(let c =0; c < board[r].length; c++) {
        if(r === c && r <3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c + 1] &&
            currentPlayer === board[r+2][c + 2] &&
            currentPlayer === board[r+3][c + 3] ) {
              return true;
          }
        }
        if(r === c -1 && r <3){
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c + 1] &&
            currentPlayer === board[r+2][c + 2] &&
            currentPlayer === board[r+3][c + 3] ) {
              return true;
          }
        }
        if(r === c-2 && r <3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r + 1][c + 1] &&
            currentPlayer === board[r +2][c + 2] &&
            currentPlayer === board[r+3][c + 3] ) {
              return true;
          }
        }
        if(r === c-3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c + 1] &&
            currentPlayer === board[r+2][c + 2] &&
            currentPlayer === board[r+3][c + 3] ) {
              return true;
          }
        }
        if( r - 1 === c && r <3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r][c + 1] &&
            currentPlayer === board[r][c + 2] &&
            currentPlayer === board[r][c + 3] ) {
              return true;
          }
        }
        if(r -2 === c && r < 3) {
          if (currentPlayer === board[r][c] &&
            currentPlayer === board[r+1][c + 1] &&
            currentPlayer === board[r+2][c + 2] &&
            currentPlayer === board[r+3][c + 3] ) {
              return true;
          }
        }
      }
    }

    return false;
  }

  checkTie(){
    const {board} = this.state;
    let available = 0;
    board.forEach( (row)=> 
        row.forEach( (elem) => elem === 0? available++ : null)
    )
    return available === 0 ? true : false;
  }


  play(col) {
    const {board, currentPlayer} = this.state;
    const color = currentPlayer === 1 ? 'Red' : 'Yellow'
  
    //start with the last row 
    for(let row = board.length - 1; row >= 0; row--) {
      if(board[row][col] === 0) {
        board[row][col] = this.state.currentPlayer;
      
        this.setState({board: board});
        this.renderBoard(board);
        console.log(board);
        if (this.checkHorizontal()|| this.checkVeritcal() || this.checkRightDiagonal() || this.checkLeftDiagonal()) {
          this.setState({gameover: true});
          return setTimeout( () => alert(`${color} Win!`), 50);
        } else if (this.checkTie()) {
          this.setState({gameover: true});
          return setTimeout( () => alert('Tie!'), 50);
        }
         return;
      }
    }
   
  }

  clickPostWin(){
    return setTimeout(() => alert('Play Again!'), 100);
  }

  clickSquare(e) {
  
    let column = e.target.getAttribute('data-columns');
    // console.log(column);
   
    this.play(column);
    this.renderBoard(this.state.board);
    this.togglePlayer();
  }

  renderBoard(board){
    // console.log(this.state.board);
  return board.map( (rows, rowIndex) => ( <Rows rows={this.state.board[rowIndex]} click={this.state.gameover ? this.clickPostWin : this.clickSquare} rowIndex={rowIndex} key={rowIndex}/>));
  }

  componentDidMount() {
    this.newGame();
  }

  render(){
    
    return(
      <Container className='fluid board text-center mt-3'>
        <h1 className='text-center'>Connect Four</h1>
       
        <Button className='text-center mt-4 mb-2' onClick={this.newGame}>New Game</Button>
        
          {this.state.board !== null ? this.renderBoard(this.state.board): null}
      </Container>
    )
  }
}


ReactDOM.render(<ConnectFour />, document.getElementById('app'));