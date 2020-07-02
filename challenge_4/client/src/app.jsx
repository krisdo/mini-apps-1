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
      win: false
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
        win: false,
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

  checkDiagonal(){

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

  play(col) {
    const {board, currentPlayer} = this.state;
    const color = currentPlayer === 1 ? 'Red' : 'Yellow'
  
    //start with the last row 
    for(let row = board.length - 1; row >= 0; row--) {
      if(board[row][col] === 0) {
        board[row][col] = this.state.currentPlayer;
        console.log(board);
         this.setState({board: board});
         this.renderBoard(board);
         if(this.checkHorizontal()|| this.checkVeritcal() ){
           this.setState({win: true});
           return setTimeout( () => alert(`${color} Win!`), 50);
         }
         return;
      }
    }
   
  }

  renderBoard(board){
    // console.log(this.state.board);
  return board.map( (rows, rowIndex) => ( <Rows rows={this.state.board[rowIndex]} click={this.state.win ? this.clickPostWin : this.clickSquare} rowIndex={rowIndex} key={rowIndex}/>));
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