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
      board: []
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
        board
      });
      
  }

  // checkHorizontal(board){
  //   for(board)
  // }

  clickSquare(e) {
    let column = e.target.getAttribute('data-columns');
    // console.log(column);
   
    this.play(column);
    this.renderBoard(this.state.board);
    this.togglePlayer();
  }

  play(col) {
    const {board} = this.state;
    //start with the last row 
    for(let row = board.length - 1; row >= 0; row--) {
      if(board[row][col] === 0) {
        board[row][col] = this.state.currentPlayer;
        console.log(board);
        return this.setState({board: board});
      }
    }
   
  }

  renderBoard(board){
    // console.log(this.state.board);
  return board.map( (rows, rowIndex) => ( <Rows rows={this.state.board[rowIndex]} click={this.clickSquare} rowIndex={rowIndex} key={rowIndex}/>));
  }

  componentDidMount() {
    this.newGame();
  }

  render(){
    
    return(
      <Container className='fluid board text-center'>
        <h1 className='text-center'>Connect Four</h1>
       
        <Button className='text-center mr-1' onClick={this.newGame}>Restart</Button>
        
          {this.state.board !== null ? this.renderBoard(this.state.board): null}
      </Container>
    )
  }
}


ReactDOM.render(<ConnectFour />, document.getElementById('app'));