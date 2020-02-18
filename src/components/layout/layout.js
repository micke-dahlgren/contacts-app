import React from "react"
import layoutStyles from "./layout.module.css";
import FormWindow from '../formWindow/formWindow';
import Header from '../header/header';
import Contacts from '../contacts/contactsContainer';

const Layout = (props) => (    

  <div className={layoutStyles.container}>
      
      {props.formWindow !== 'closed' ? 
      <FormWindow 
        setFormWindow={props.setFormWindow} 
        addNewContact={props.addNewContact} 
        updateContact={props.updateContact} 
        formWindow={props.formWindow}
        contactData={props.contactData}/> 
      : 
      <div />
      }

      <Header 
        activePage={props.activePage} 
        setActivePage={props.setActivePage} 
        setFormWindow={props.setFormWindow}
      />

      <Contacts 
        getContactCards={props.getContactCards}
      />

  </div>

)

export default Layout;

/* HTML Formatted */