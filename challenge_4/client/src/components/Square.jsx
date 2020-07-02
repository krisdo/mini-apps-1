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
    this.click = this.click.bind(this);
  }

 click(e) {
   this.props.click(e);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.view !== prevState.view) {
      return { view: nextProps.view };
    }
  }

  renderPlay(){
    const {view} = this.state;

    if(view === 1) {
      return <StyledCircleRed data-columns={this.state.col} onClick={this.click}></StyledCircleRed>
    }
    if(view === 2) {
      return <StyledCircleYellow data-columns={this.state.col} onClick={this.click}></StyledCircleYellow>
    } else {
      return <StyledCircleBlank data-columns={this.state.col} onClick={this.click}></StyledCircleBlank>
    }
  }

  render(){

    return(
  
    <StyledSquare className='square'>
      {this.renderPlay()}
    </StyledSquare>   

  
    )

  }
}

export default Square;