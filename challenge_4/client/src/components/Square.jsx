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
      view: this.props.view,
      row: this.props.row,
      col: this.props.col,
    }
    // this.onClick = this.onClick.bind(this);
  }

  play(){
    this.props.play()
  }

  onClick(e) {
  
   this.props.click();

  }

  renderPlay(){
    const {view} = this.state;

    if(view === 1) {
      return <StyledCircleRed data-columns={this.state.col} onClick={this.props.click(this)}></StyledCircleRed>
    }
    if(view === 2) {
      return <StyledCircleYellow data-columns={this.state.col} onClick={this.props.click(this)}></StyledCircleYellow>
    } else {
      return <StyledCircleBlank data-columns={this.state.col} onClick={this.props.click(this)}></StyledCircleBlank>
    }
  }

  render(){

    return(
  
    <StyledSquare className='square'>
      <StyledCircleBlank/>
    </StyledSquare>   

  
    )

  }
}

export default Square;