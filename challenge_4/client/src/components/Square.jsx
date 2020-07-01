import React from 'react';
import {Container, Col} from 'react-bootstrap';
import styled from 'styled-components';

const StyledSquare = styled.div`
  background-color: blue;
  width: 100%;
  padding: 10%;
  `;

const StyledCircleBlank = styled.div`
  border-radius:  50%;
  background-color: white;
  width: 90%;
  padding-bottom: 90%;
`;
const StyledCircleRed = styled.div`
  border-radius:  50%;
  background-color: red;
  width: 90%;
  padding-bottom: 90%;
`;
const StyledCircleYellow = styled.div`
  border-radius:  50%;
  background-color: yellow;
  width: 90%;
  padding-bottom: 90%;
`;



class Square extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      view: 'blank'
    }
  }

  onClick(e) {
  
    if(props.player === 1) {
      this.setState({
        view: 'red'
      });
    } else {
      this.setState({
        view: 'yellow'
      });
    }

  }

  render(){

    return(
  
     <StyledSquare className='square'>
      <StyledCircle className='circle'></StyledCircle>
      </StyledSquare>   

  
    )

  }
}

export default Square;