import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import {Container, Row, Col, Button} from 'react-bootstrap';


class ConnectFour extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerTurn: 1
    }

  }

  clickSquare() {
    //send post request to server with coordinates
    
  }

  render(){
    return(
      <Container width={400} className='board text-center'>
        <h1 className='text-center'>Connect Four</h1>
        <Row><Col className='px-0' ><Square x={0} y={0}/></Col><Col className='px-0'><Square x={1} y={0}/></Col><Col className='px-0'><Square x={2} y={0}/></Col><Col className='px-0'><Square x={3} y={0}/></Col ><Col className='px-0'><Square x={4} y={0}/></Col><Col className='px-0'><Square x={5} y={0}/></Col><Col className='px-0'><Square x={6} y={0}/></Col></Row>
        <Row ><Col className='px-0'><Square x={0} y={1}/></Col><Col className='px-0'><Square x={1} y={1}/></Col><Col className='px-0'><Square x={2} y={1}/></Col><Col className='px-0'><Square x={3} y={1}/></Col><Col className='px-0'><Square x={4} y={1}/></Col><Col className='px-0'><Square x={5} y={1}/></Col><Col className='px-0'><Square x={6} y={1}/></Col></Row>
        <Row ><Col className='px-0'><Square x={0} y={2}/></Col><Col className='px-0'><Square x={1} y={2}/></Col><Col className='px-0'><Square x={2} y={2}/></Col><Col className='px-0'><Square x={3} y={2}/></Col><Col className='px-0'><Square x={4} y={2}/></Col><Col className='px-0'><Square x={5} y={2}/></Col><Col className='px-0'><Square x={6} y={2}/></Col></Row>
        <Row ><Col className='px-0'><Square x={0} y={3}/></Col><Col className='px-0'><Square x={1} y={3}/></Col><Col className='px-0'><Square x={2} y={3}/></Col><Col className='px-0'><Square x={3} y={3}/></Col><Col className='px-0'><Square x={4} y={3}/></Col><Col className='px-0'><Square x={5} y={3}/></Col><Col className='px-0'><Square x={6} y={3}/></Col></Row>
        <Row ><Col className='px-0'><Square x={0} y={4}/></Col><Col className='px-0'><Square x={1} y={4}/></Col><Col className='px-0'><Square x={2} y={4}/></Col><Col className='px-0'><Square x={3} y={4}/></Col><Col className='px-0'><Square x={4} y={4}/></Col><Col className='px-0'><Square x={5} y={4}/></Col><Col className='px-0'><Square x={6} y={4}/></Col></Row>
        <Row ><Col className='px-0'><Square x={0} y={5}/></Col><Col className='px-0'><Square x={1} y={5}/></Col><Col className='px-0'><Square x={2} y={5}/></Col><Col className='px-0'><Square x={3} y={5}/></Col><Col className='px-0'><Square x={4} y={5}/></Col><Col className='px-0'><Square x={5} y={5}/></Col><Col className='px-0'><Square x={6} y={5}/></Col></Row>
        <Button className='text-center mr-1'>Restart</Button>
      </Container>
    )
  }
}


ReactDOM.render(<ConnectFour />, document.getElementById('app'));