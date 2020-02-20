import React from "react"
import formWindowStyles from "./formWindow.module.css";

class FormWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      phone:"",
      validForm: false,
    }
  }
  
  componentDidMount(){
    let name, company, phone = ' ';
    let validForm = false;
    if(this.props.formWindow === "edit"){
      name = this.props.contactData.name;
      company = this.props.contactData.company;
      phone = this.props.contactData.phone;
      validForm= true;
      this.setState({name:name, company:company, phone:phone, validForm:validForm});
    } 
  }

  componentDidUpdate(){
    //check if form is valid
    if(this.state.name.length >= 1 && this.state.phone.length >= 1 && !this.state.validForm){
      this.setState({validForm:true});
    }
    
    if ((this.state.name.length === 0 || this.state.phone.length === 0) && this.state.validForm){
      this.setState({validForm:false});
    }
}

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    let allowedInput=/^[0-9]+$/;

    // prevent NaN-input
    if(name === "phone" && !allowedInput.test(value) && value !== ""){
      return;
    }
    this.setState({
      [name]: value,
    })
  }



  handleSubmit = event => {
    event.preventDefault()
    
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
    
  


  getButtonState = () => {
    if(!this.state.validForm){
      return(<div className={`btn btn--inactive ${formWindowStyles.btn__right}`}>Spara</div>);
    }else{
      return(<button className={`btn btn--primary ${formWindowStyles.btn__right}`} type="submit">Spara</button>);
    }
    
  }

  render() {
    return (
      <div 
        className={formWindowStyles.parent} >
        <div className={formWindowStyles.container}>

          <form 
              onSubmit={this.handleSubmit}
            >
              <div className={formWindowStyles.item}>
                <label className={formWindowStyles.label}>
                  Namn:
                  <br></br>
                  <input
                    className={formWindowStyles.input}
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div className={formWindowStyles.item}>
              <label className={formWindowStyles.label}>
                  Företag:
                  <br></br>
                  <input
                   className={formWindowStyles.input}
                    type="text"
                    name="company"
                    value={this.state.company}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>

              <div className={formWindowStyles.item}>
                <label className={formWindowStyles.label}>
                  Nummer:
                  <br></br>
                  <input
                    className={formWindowStyles.input}
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                </label>
              </div>
              <div className={`${formWindowStyles.item} ${formWindowStyles.btn}`}>
                <button className={`btn btn--secondary ${formWindowStyles.btn__left}`}
                  onClick={() => {this.props.setFormWindow('closed', '')}}
                  onKeyDown={() => {this.props.setFormWindow('closed', '')}}
                >Avbryt
                </button>
                {this.getButtonState()}
              </div>

              
              
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
