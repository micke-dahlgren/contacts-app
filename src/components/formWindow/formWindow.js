import React from "react"
import formWindowStyles from "./formWindow.module.css";
import {isValidNumber} from '../helperFunctions/helperFunctions';

class FormWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone:"",
      warning: "noName"
    }
  }
  
  componentDidMount(){
    let name, company, phone = '';
    if(this.props.formWindow === 'edit'){
      name = this.props.contactData.name;
      company = this.props.contactData.company;
      phone = this.props.contactData.phone;
    }
    this.setState({name:name, company:company, phone:phone});
    
  }

  inputError = (val) =>{
    if(!isValidNumber(val)){
      
      this.setState({warning:"NaN"});
      return true; 
    }else if(val.length < 1){
      this.setState({warning:"noNumber"});
      return true; 
    }else{
      this.setState({warning:"none"});
      return false; 
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })

    if(name === "phone"){
     this.inputError(value);
    }

  }
  handleSubmit = event => {
    event.preventDefault()
    if(this.inputError(this.state.phone)){
      alert(`Du behöver ange ett korrekt telefonnummer`)
    }else if(this.state.name === "" || this.state.name === undefined){
      alert(`Du behöver ange ett namn`)
    }else{
      let contactData = {
        name: this.state.name,
        phone: this.state.phone,
        company: this.state.company,

      };
      if(this.props.formWindow === 'edit'){
        this.props.updateContact(contactData);

      }else{
        this.props.addNewContact(contactData);
      }
      
      this.props.setFormWindow('closed','');
    }
    
  }

  showWarning = () =>{
    if(this.state.warning === "NaN"){
      return(
        <div className={formWindowStyles.warning}>Se till att telefonnumret du angivit endast innehåller siffror</div>
      )
    }else if(this.state.warning === "noNumber"){
      return(
        <div className={formWindowStyles.warning}>Du behöver ange ett telefonnummer</div>
      )
    }

  }

  getButtonState = () => {
    if(this.state.warning !== "none"){
      return(<div className="btn btn--inactive">Submit</div>);
    }else{
      return(<button className="btn btn--primary" type="submit">Submit</button>);
    }
    
  }

  render() {
    return (
      <div>
        <div className={formWindowStyles.container}>

          <form 
            onSubmit={this.handleSubmit}
          >

            <label>
              Name
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
              />
            </label>

            <label>
              Company
              <input
                type="text"
                name="company"
                value={this.state.company}
                onChange={this.handleInputChange}
              />
            </label>

            <label>
              Number
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChange}
              />
              {this.showWarning()}
            </label>
            {this.getButtonState()}
            
          </form>
      
        </div>
        <div 
          className="overlay" 
          onClick={() => {this.props.setFormWindow('closed', '')}}
          onKeyDown={() => {this.props.setFormWindow('closed', '')}}
          />
      </div>
    )
  }

}
export default FormWindow;
