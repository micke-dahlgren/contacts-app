import React from 'react';
import Layout from './layout/layout';
import ContactCard from './contacts/contactCard/contactCard';
import { fetchJSON, _addContact,_updateContact, _deleteContact} from "./contactFunctions/contactFunctions";

class Container extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { 
            activePage: "alla",
            formWindow: 'closed',
            contactData: [],
            phoneBookData: []
        };
    }

    componentDidMount(){
      let phoneBookData = fetchJSON();
      this.setState({phoneBookData})
    }

    setFormWindow = (toggle, id) => {
      let formWindow = this.state.formWindow;
      if(toggle === 'open'){
        if(id === undefined || id === ''){
          formWindow = 'addNew';
        }else{
          formWindow = 'edit';
          this.getContactData(id);
        }
      }else if(toggle === 'closed'){
        formWindow = 'closed';
      }

      
      this.setState({formWindow})

    }

    setActivePage = (event) =>{
      let activePage = event;  
      this.setState({activePage});
    }

    addNewContact = (contactData) =>{
        let phoneBookData = _addContact([...this.state.phoneBookData], contactData);
        this.setState({phoneBookData});
    }

    updateContact = (contactData) =>{
      let phoneBookData= _updateContact([...this.state.phoneBookData], contactData, this.state.contactData._id);
      this.setState({phoneBookData});
  }

    deleteContact = (contactId) => {
      let phoneBookData = _deleteContact([...this.state.phoneBookData], contactId);
      this.setState({phoneBookData});
    }

    getContactData = (contactId) => {
      let phoneBookData = [...this.state.phoneBookData];

      let contactData = phoneBookData.find(item => item._id === contactId);

      this.setState({contactData});
    }

    getContactCards = ()  => {

        let contactCards = [];
        this.state.phoneBookData.forEach(item =>
          {
            if(this.state.activePage === "alla"){
              contactCards.push(<li key={item._id + "_li"}><ContactCard key={item._id} contactData={item}  setFormWindow={this.setFormWindow} deleteContact={this.deleteContact}/></li>)
            }else if(this.state.activePage === "vänner"){
              if(item.company === ""){
                contactCards.push(<li key={item._id + "_li"}><ContactCard key={item._id} contactData={item}  setFormWindow={this.setFormWindow} deleteContact={this.deleteContact}/></li>)
              }
            }else if(item.company !== ""){
              contactCards.push(<li key={item._id + "_li"}><ContactCard key={item._id} contactData={item}  setFormWindow={this.setFormWindow} deleteContact={this.deleteContact}/></li>)
            }
        }
        
        );
        return contactCards;
      }

    render() {
       
        return (
          <Layout 
            {...this.state} 
            setActivePage={this.setActivePage} 
            getContactCards={this.getContactCards}
            setFormWindow={this.setFormWindow}
            addNewContact={this.addNewContact}
            updateContact={this.updateContact}
            />
        )
    }
}

export default Container;

