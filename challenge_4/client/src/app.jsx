import React from 'react';
import ReactDOM from 'react-dom';
// import Square from '.components/Square.jsx';

class ConnectFour extends React.Component {

  constructor(props) {
    super(props);

  }

  render(){
    return(<div>testing</div>);
    // <Square x={0} y={0}/><Square x={1} y={0}/><Square x={2} y={0}/><Square x={3} y={0}/><Square x={4} y={0}/><Square x={5} y={0}/><Square x={6} y={0}/>
    // <Square x={0} y={1}/><Square x={1} y={1}/><Square x={2} y={1}/><Square x={3} y={1}/><Square x={4} y={1}/><Square x={5} y={1}/><Square x={6} y={1}/>
    // <Square x={0} y={2}/><Square x={1} y={2}/><Square x={2} y={2}/><Square x={3} y={2}/><Square x={4} y={2}/><Square x={5} y={2}/><Square x={6} y={2}/>
    // <Square x={0} y={3}/><Square x={1} y={3}/><Square x={2} y={3}/><Square x={3} y={3}/><Square x={4} y={3}/><Square x={5} y={3}/><Square x={6} y={3}/>
    // <Square x={0} y={4}/><Square x={1} y={4}/><Square x={2} y={4}/><Square x={3} y={4}/><Square x={4} y={4}/><Square x={5} y={4}/><Square x={6} y={4}/>
    // <Square x={0} y={5}/><Square x={1} y={5}/><Square x={2} y={5}/><Square x={3} y={5}/><Square x={4} y={5}/><Square x={5} y={5}/><Square x={6} y={5}/>
  }
}


ReactDOM.render(<ConnectFour />, document.getElementById('app'));