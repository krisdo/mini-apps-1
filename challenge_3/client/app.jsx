class Shopping extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      clickCounter: 0,
      id: null,
      name: null,
      email: null,
      password: null,
      line1: null,
      line2: null,  
      city: null,
      state: null,
      zipcode: null,
      phone: null,
      cc: null,
      doe: null,
      CVV: null,
      billing_zip: null
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
   
  }

  handleOnSubmit(e){
    e.preventDefault();
    const target = e.target;
   
    e.persist();
    if(e.target.className === 'purchase'){
      this.setState({
        clickCounter: 0
      });
    } else {
      this.setState({
        clickCounter: this.state.clickCounter + 1,
      });
    }

    const body = this.state;
    if(e.type === 'submit') {
      let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body),
      };

      fetch('/accounts', options)
      .then( (res) => {
        return res.json();
      })
      .then((data) =>{
        console.log(data);
      })
      .catch((err) => {
        console.log(err)
        });
    
    }
  };


  handleInputChange(e){
    // e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
    [name]: value});
  }

  render() {
    return (<div>
      <h1>Shopping Purchase</h1>
      {this.state.clickCounter === 0 && <button type="button" onClick={this.handleOnSubmit}>Ready? Checkout</button>}
      {this.state.clickCounter === 1 && <div><F1 onSubmit={this.handleOnSubmit} inputChange={this.handleInputChange}/></div>}
      {this.state.clickCounter === 2 && <div><F2 onClick={this.handleOnSubmit}/></div>}
      {this.state.clickCounter === 3 && <div><F3 onClick={this.handleOnSubmit}/></div>}
      {this.state.clickCounter === 4 && <div><Confirmation onClick={this.handleOnSubmit} state={this.state}/></div>}
      </div>
      )
  }
   
};

const F1 = ({inputChange, onSubmit}) => {

    return(<div>
     <h3>Step 1: Create Account</h3>
      <form onSubmit={onSubmit}>
        <label>
        Name:
        <input id="name" type="text" name="name" onChange={inputChange}/>
        </label>
        <label>
        e-mail:
        <input id="email" type="text" name="email" onChange={inputChange}/>
        </label>
        <label>
        password:
        <input id="password" type="text" name="password" onChange={inputChange}/>
        </label>
      <input type="submit" value="Next: Step 2" />
      </form>
      </div>);

};

const F2 = (props) => {

  return (<div>
   <h3>Step 2: Enter Shipping Address</h3>
    <form>
      <label>
      Line 1:
      <input id="line1" type="text" name="line1"/>
      </label>
      <label>
      Line 2:
      <input id="line2" type="text" name="line2"/>
      </label>
      <label>
      City:
      <input id="city" type="text" name="city"/>
      </label>
      <label>
      State:
      <input id="state" type="text" name="state"/>
      </label>
      <label>
      Zipcode:
      <input id="zipcode" type="text" name="zipcode"/>
      </label>
    <input type="submit" value="Next: Step 3" onClick={props.onClick}/>
    </form>
    </div>);

};

const F3 = (props) => {

  return(<div>
   <h3>Step 3: Credit Card</h3>
    <form>
      <label>
      Credit Card #:
      <input id="cc" type="text" name="cc"/>
      </label>
      <label>
      Expiry Date:
      <input id="doe" type="text" name="doe"/>
      </label>
      <label>
      CVV:
      <input id="cvv" type="text" name="cvv"/>
      </label>
      <label>
      Billing Zipcode:
      <input id="billing_zip" type="text" name="billing_zip"/>
      </label>
    <input type="submit" value="Next: Confirmation" onClick={props.onClick}/>
    </form>
    </div>);

};

const Confirmation = (props) => {

  return(<div>
    <h3>Final Step: Confirmation</h3>
    <p>Name: {props.state.name}</p>
    <p>Phone: {props.state.phone}</p>
    <p>e-mail: {props.state.email}</p>
    <p>ADDRESS:</p>
    <p>{props.state.line1}</p>
    <p>{props.state.line2}</p>
    <p>{props.state.city}, {props.state.state} {props.state.zipcode}</p>
    <button className="purchase" onClick={props.onClick}>SPEND MONEY!</button>
   </div>)
};

ReactDOM.render(<Shopping />, document.getElementById('app'));




