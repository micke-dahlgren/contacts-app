import React from "react"
import layoutStyles from "./layout.module.css";
import FormWindow from '../formWindow/formWindow';
import Header from '../header/header';
import Contacts from '../contacts/contactsContainer';

const Layout = (props) => (    
  
  <div className= {layoutStyles.outer__gridParent}>
    <div className={`${layoutStyles.outer__gridChild} card`}>
      <div className={layoutStyles.inner__gridParent}>
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

        <div className={layoutStyles.inner__gridChild__header}>

          <Header 
            activePage={props.activePage} 
            setActivePage={props.setActivePage} 
            setFormWindow={props.setFormWindow}
          />

        </div>
        <div className={layoutStyles.inner__gridChild__content}>

          <Contacts 
            getContactCards={props.getContactCards}
          />
          
        </div>

      </div>
    </div>
  </div>

)

export default Layout;
