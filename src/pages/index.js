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
  const [contacts, setContacts] = useState(phoneBookJSON)
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editModalData, setEditModalData] = useState({})

  const addContact = contactData => {
    const contact = {
      _id: guidGenerator(),
      ...contactData,
    }
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
    setContacts(
      Object.assign([], contacts, {
        [index]: editedContact,
      })
    )
    setEditModalVisible(false)
    setEditModalData({})
  }

  const removeContacts = contactId => () =>
    setContacts(contacts.filter(contact => contact._id !== contactId))

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
      />
      <Modal visible={editModalVisible}>
        <ContactForm data={editModalData} onSubmit={editContact} />
      </Modal>
    </div>
  )
}

export default IndexPage
