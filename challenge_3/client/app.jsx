class Shopping extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      clickCounter: 0,
      id: null,
      name: null,
      email: null,
      line1: null,
      line2: null,  
      city: null,
      state: null,
      zipcode: null,
      phone: null,
      cc: null,
      doe: null,
      billing_zip: null
    }

  
    this.clickCounter = this.clickCounter.bind(this);
   
  }

  clickCounter(e){
    // e.preventDefault();
    e.persist();
    if(e.target.className === 'purchase'){
      this.setState({
        clickCounter: 0
      });
      
    } else {
      this.setState({
        clickCounter: this.state.clickCounter + 1,
      });
      console.log(this.state.clickCounter);
    } 
   }

 submit(obj){
    obj.id = this.state.id;
    console.log(obj);

    let options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(obj),
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
  
  };


  handleInputChange(e){
     e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = target.value;
    this.setState({
    [name]: value});

  }

  render() {
    return (<div>
      <h1>Shopping Purchase</h1>
      {this.state.clickCounter === 0 && <button type="button" onClick={this.clickCounter}>Ready? Checkout</button>}
      {this.state.clickCounter === 1 && <div><F1 submit={this.submit.bind(this)} onClick={this.clickCounter} inputChange={this.handleInputChange}/></div>}
      {this.state.clickCounter === 2 && <div><F2 submit={this.submit.bind(this)} onClick={this.clickCounter}  inputChange={this.handleInputChange}/></div>}
      {this.state.clickCounter === 3 && <div><F3 submit={this.submit.bind(this)} onClick={this.clickCounter}  inputChange={this.handleInputChange}/></div>}
      {this.state.clickCounter === 4 && <div><Confirmation onClick={this.clickCounter} state={this.state}/></div>}
      </div>
      )
  }
   
};

class F1 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      email: null,
      password: null
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.inputChange = this.props.inputChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.submit(this.state);
    this.props.onClick(e);
  }
  
  render(){
    return(<div>
      <h3>Step 1: Create Account</h3>
       <form onSubmit={this.onSubmit} >
       <p><label>
         Name:
         <input id="name" type="text" name="name" onChange={this.inputChange}/>
         </label></p> 
         <p><label>
         e-mail:
         <input id="email" type="text" name="email" onChange={this.inputChange}/>
         </label></p> 
         <p><label>
         Password:
         <input id="password" type="text" name="password" onChange={this.inputChange}/>
         </label></p> 
       <input type="submit" value="Next: Step 2" />
       </form>
       </div>);
  }
};



class F2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      line1: null,
      line2: null,  
      city: null,
      state: null,
      zipcode: null,
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.inputChange = this.props.inputChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.submit(this.state);
    this.props.onClick(e);
  }
  
  render(){
  return (<div>
   <h3>Step 2: Enter Shipping Address</h3>
    <form onSubmit={this.onSubmit}>
     <p><label>
      Line 1:
      <input id="line1" type="text" name="line1" onChange={this.inputChange}/>
      </label></p> 
      <p><label>
      Line 2:
      <input id="line2" type="text" name="line2" onChange={this.inputChange}/>
      </label></p> 
      <p><label>
      City:
      <input id="city" type="text" name="city" onChange={this.inputChange}/>
      </label></p> 
      <label>
      State:
      <input id="state" type="text" name="state" onChange={this.inputChange}/>
      </label>
      <label>
      Zipcode:
      <input id="zipcode" type="text" name="zipcode" onChange={this.inputChange}/>
      </label>
    <input type="submit" value="Next: Step 3" />
    </form>
    </div>);
  }

};

class F3 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cc: null,
      doe: null,
      CVV: null,
      billing_zip: null
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.inputChange = this.props.inputChange.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    this.props.submit(this.state);
    this.props.onClick(e);
  }

  render(){
    return(<div>
    <h3>Step 3: Credit Card</h3>
      <form onSubmit={this.onSubmit}>
      <p><label>
        Credit Card #:
        <input id="cc" type="text" name="cc" onChange={this.inputChange}/>
        </label></p> 
        <label>
        Expiry Date:
        <input id="doe" type="text" name="doe" onChange={this.inputChange}/>
        </label>
        <label>
        CVV:
        <input id="cvv" type="text" name="cvv" onChange={this.inputChange}/>
        </label>
        <label>
        Billing Zipcode:
        <input id="billing_zip" type="text" name="billing_zip" onChange={this.inputChange}/>
        </label>
      <input type="submit" value="Next: Confirmation" />
      </form>
      </div>);
    }
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




