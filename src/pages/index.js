import React, { useState } from "react"

import phoneBookJSON from "../data/PhoneBook.json"
import guidGenerator from "../helpers/guidGenerator"

import Dropdown from "../components/Dropdown"
import ContactForm from "../components/ContactForm"
import ContactList from "../components/ContactList"
import ContactListItem from "../components/ContactListItem"
import Modal from "../components/Modal"

import styles from "./index.module.scss"

const IndexPage = () => {
  
  // setting state variables
  const [contacts, setContacts] = useState(phoneBookJSON) 
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editModalData, setEditModalData] = useState({})

  const addContact = contactData => {
    const contact = {
      _id: guidGenerator(),
      ...contactData,
    }
    /* 
    ?
      [newEntry, ...Array] (spread operator) === Array.unshift(newEntry) 
      Spread operator better practice?
    */
    setContacts([contact, ...contacts]) 
  }

  const showEditModal = contact => () => {
    setEditModalVisible(true)
    setEditModalData(contact)
  }

  const editContact = editedContactData => {
    const editedContact = {
      _id: editModalData._id,
      ...editedContactData,
    }
    const index = contacts.findIndex(
      contact => contact._id === editedContact._id
    )
    /* 

    */
    setContacts(
      Object.assign([], contacts, {
        [index]: editedContact,
      })                               
    )
    /* 
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      const returnedTarget = Object.assign(target, source); 
      Properties in the target object are overwritten by properties in the sources if they have the same key.
    ?
      Why Object.assign(emptyArray, contactsArray, {newContactObject}) ?
      Would Object.assign(contactsArray,{newContactObject}) work ? 
    */

    setEditModalVisible(false)
    setEditModalData({}) // clearing modal data
  }

  const removeContacts = contactId => () =>{
    setContacts(contacts.filter(contact => contact._id !== contactId))
  }
  /*
  ?
    const myFunc = (args) => { ... dostuffWith(args) }
    !==
    const myFunc = args => () =>  { ... dostuffWith(args) }

    What is the difference?
  */

  return (
    <div>
      <div className={styles.header}>
        <div>Contact List</div>
        <Dropdown label="Add contact" type="form">
          <ContactForm onSubmit={addContact} />
        </Dropdown>
      </div>
      <ContactList
        dataSource={contacts}
        renderItem={contact => (
          <ContactListItem
            key={contact._id}
            contact={contact}
            showEditModal={showEditModal}
            removeContact={removeContacts}
          />
        )}
        /*
        ?
          renderItem is a callback function. Why define inline?
        */

      />
      <Modal visible={editModalVisible}>
        <ContactForm data={editModalData} onSubmit={editContact} />
      </Modal>
    </div>
  )
}

export default IndexPage
