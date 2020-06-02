
// import ReactDOM from 'react-dom';


class Grocery extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      checkout: false;
    }
  }

  click(){

  }

  render() {
    return (<div>
      <h1>Shopping Cart</h1>
      <button onClick>Checkout</button>
      </div>
      )
  }
   
};


ReactDOM.render(<Grocery />, document.getElementById('app'));




