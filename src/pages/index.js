import React, { useState } from "react"

import phoneBookJSON from "../data/PhoneBook.json"
import guidGenerator from "../helpers/guidGenerator"

import Dropdown from "../components/Dropdown"
import AddContactForm from "../components/AddContactForm"
import ContactList from "../components/ContactList"
import ContactListItem from "../components/ContactListItem"

import styles from "./index.module.scss"

const IndexPage = () => {
  const [contacts, setContacts] = useState(() => phoneBookJSON)

  const handleOnSubmit = ({ closeDropdown }) => data => {
    const contact = {
      _id: guidGenerator(),
      ...data,
    }

    setContacts([contact, ...contacts])

    closeDropdown()
  }

  const handleOnRemove = contactId =>
    setContacts(contacts.filter(contact => contact._id !== contactId))

  return (
    <div>
      <div className={styles.header}>
        <div>Contact List</div>
        <Dropdown
          label="Add contact"
          component={parentProps => (
            <AddContactForm onSubmit={handleOnSubmit(parentProps)} />
          )}
        />
      </div>
      <ContactList
        dataSource={contacts}
        renderItem={contact => (
          <ContactListItem
            key={contact._id}
            contact={contact}
            onRemove={handleOnRemove}
          />
        )}
      />
    </div>
  )
}

export default IndexPage
