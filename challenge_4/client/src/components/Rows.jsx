import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import Square from './Square.jsx'

const Rows = (props) => (

  <Row>
  {props.rows.map( (cell, colIndex) => ( <Col className='px-0'> <Square view={cell} click={props.click} col={colIndex} row={props.rowIndex} />  </Col>)) } 
  </Row>
);

export default Rows;