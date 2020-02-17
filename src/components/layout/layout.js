import React from "react"
import layoutStyles from "./layout.module.css";
import Modal from './modal/modal';
import Header from '../header/header';
import Contacts from '../contacts/contactsContainer';

const Layout = (props) => (    

  <div className={layoutStyles.container}>
      {props.modal ? <Modal toggleModal={props.toggleModal}/> : <div></div>}
      <Header 
        activePage={props.activePage} 
        setPage={props.setPage} 
        toggleModal={props.toggleModal}
      />
      
      <Contacts 
        getContactItems={props.getContactItems} 
      />
  </div>

)

export default Layout;
/*
  <Header currentPage={props.currentPage}/>
  <Contacts toggleModal={() =>{this.props.toggleModal()}} phoneBookData={props.phoneBookData} currentPage={props.currentPage}/>
*/