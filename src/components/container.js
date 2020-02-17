import React from 'react';
import Layout from './layout/layout';
import phoneBookJSON from "../data/PhoneBook.json";
import ContactCard from './contacts/contactCard/contactCard';
import {generateId} from "./helperFunctions/helperFunctions";

class Container extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { 
            activePage: "alla",
            formWindow: 'closed',
            contactData: [],
            phoneBookData: phoneBookJSON
        };
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
        let phoneBookData = [...this.state.phoneBookData];
          
        phoneBookData.unshift({
            _id:generateId(),
            name:contactData.name,
            company:contactData.company,
            phone:contactData.phone,
        })
        this.setState({phoneBookData});
    }

    updateContact = (newContactData) =>{
      let phoneBookData = [...this.state.phoneBookData];
      let id = this.state.contactData._id;
      //Find index of specific object using findIndex method.    
      let index = phoneBookData.findIndex((item => item._id === id));

      //Update object's name property.
      phoneBookData[index].name = newContactData.name;
      phoneBookData[index].company = newContactData.company;
      phoneBookData[index].phone = newContactData.phone;

      this.setState({phoneBookData});

  }

    deleteContact = (contactId) => {
      let phoneBookData = [...this.state.phoneBookData];

      phoneBookData.forEach(item =>{
        if(item._id === contactId){
          phoneBookData.splice(phoneBookData.indexOf(item),1);
        }
      })


      this.setState({phoneBookData});
    }

    getContactData = (contactId) => {
      let phoneBookData = [...this.state.phoneBookData];

      let contactData = phoneBookData.find(item => item._id === contactId);

      this.setState({contactData});
    }

    getContactItems = ()  => {

        let contactCards = [];
        this.state.phoneBookData.forEach(item =>
          {
            if(this.state.activePage === "alla"){
              contactCards.push(<ContactCard key={item._id} contactData={item}  setFormWindow={this.setFormWindow} deleteContact={this.deleteContact}/>)
            }else if(this.state.activePage === "vänner"){
              if(item.company === ""){
                contactCards.push(<ContactCard key={item._id} contactData={item}  setFormWindow={this.setFormWindow} deleteContact={this.deleteContact}/>)
              }
            }else if(item.company !== ""){
              contactCards.push(<ContactCard key={item._id} contactData={item}  setFormWindow={this.setFormWindow} deleteContact={this.deleteContact}/>)
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
            getContactItems={this.getContactItems}
            setFormWindow={this.setFormWindow}
            addNewContact={this.addNewContact}
            updateContact={this.updateContact}
            />
        )
    }
}
export default Container;
