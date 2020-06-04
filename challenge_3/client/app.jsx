
// import ReactDOM from 'react-dom';
//checkout button
//on click, renders F1 component
  //F1 component
    //on click, renders F2 component
      //F2 component 
        //on click, renders F3 component
            //Confirmation Page
              //purchase button


class Shopping extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      clickCounter: 0,
      user: {
        id: null,
        name: null,
        email: null,
        password: null,
        address: {line1: null, line2: null,  city: null, state: null, zipcode: null},
        phone: null,
        cc: null,
        doe: null,
        CVV: null,
        billing_zip: null

      }
    }
    this.clickCount = this.clickCount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  clickCount(e){
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
  }


  handleSubmit(){

  }

  handleChange(){

  }
  render() {
    return (<div>
      <h1>Shopping Purchase</h1>
      {this.state.clickCounter === 0 && <button onClick={this.clickCount}>Ready? Checkout</button>}
      {this.state.clickCounter === 1 && <div><F1 onClick={this.clickCount}/></div>}
      {this.state.clickCounter === 2 && <div><F2 onClick={this.clickCount}/></div>}
      {this.state.clickCounter === 3 && <div><F3 onClick={this.clickCount}/></div>}
      {this.state.clickCounter === 4 && <div><Confirmation onClick={this.clickCount} user={this.state.user}/></div>}
      </div>
      )
  }
   
};

const F1 = (props) => {

    return(<div>
     <h3>Step 1: Create Account</h3>
      <form>
        <label>
        Name:
        <input id="name" type="text" name="name"/>
        </label>
        <label>
        e-mail:
        <input id="email" type="text" name="email"/>
        </label>
        <label>
        password:
        <input id="password" type="text" name="password"/>
        </label>
      <input type="submit" value="Next: Step 2" onClick={props.onClick}/>
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

const Confirmation = ({user, onClick}) => {

  return(<div>
    <h3>Final Step: Confirmation</h3>
    <p>Name: {user.name}</p>
    <p>Phone: {user.phone}</p>
    <p>e-mail: {user.email}</p>
    <p>ADDRESS:</p>
    <p>{user.address.line1}</p>
    <p>{user.address.line2}</p>
    <p>{user.address.city}, {user.address.state} {user.address.zipcode}</p>
    <button className="purchase" onClick={onClick}>SPEND MONEY!</button>
   </div>)
};

ReactDOM.render(<Shopping />, document.getElementById('app'));




