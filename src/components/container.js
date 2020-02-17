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
            modal:false,
            phoneBookData: phoneBookJSON
        };
    }

    toggleModal = () => {
      
      let modal = this.state.modal;
      this.setState({
        modal: !modal
      })

    }

    setPage = (event) =>{
      let activePage = event;  
      this.setState({activePage});
    }

    openAddNew = (activePage) =>{
        let phoneBookData = [...this.state.phoneBookData];
          
        phoneBookData.unshift({
            _id:generateId(),
            name:"Micke",
            company:"cool AB",
            phone:"0736123835",
        })
        this.setState({phoneBookData});
    }


    getContactItems = ()  => {

        let contactCards = [];
        this.state.phoneBookData.forEach(item =>
          {
            if(this.state.activePage === "alla"){
              contactCards.push(<ContactCard key={item._id} contactData={item}  toggleModal={this.toggleModal}/>)
            }else if(this.state.activePage === "vänner"){
              if(item.company === ""){
                contactCards.push(<ContactCard key={item._id} contactData={item}  toggleModal={this.toggleModal}/>)
              }
            }else if(item.company !== ""){
              contactCards.push(<ContactCard key={item._id} contactData={item}  toggleModal={this.toggleModal}/>)
            }
        }
        
        );
        return contactCards;
      }

    render() {
       
        return (
          <Layout 
            {...this.state} 
            setPage={this.setPage} 
            getContactItems={this.getContactItems}
            toggleModal={this.toggleModal}/>
        )
    }
}
export default Container;

/*

<Layout toggleModal={() =>{this.state.toggleModal()}} phoneBookData={this.state.phoneBookData} activePage={this.state.activePage}/>

*/