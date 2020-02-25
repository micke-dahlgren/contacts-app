import React from "react"

// import { ReactComponent as Ellipsis } from "../images/ellipsis-v-solid.svg"

import Dropdown from "./Dropdown"
import DropdownItem from "./DropdownItem"
import ContactForm from "./ContactForm"

import styles from "./ContactListItem.module.scss"

const ContactListItem = ({
  contact,
  onRemove,
  showEditModal,
  removeContact,
}) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.contactData}>
        <div>{contact.name}</div>
        <div>{contact.company ? contact.company : "-"}</div>
        <div>{contact.phone}</div>
      </div>
      <Dropdown label="Actions">
        <DropdownItem label="Edit" onClick={showEditModal(contact)} />
        <DropdownItem label="Remove" onClick={removeContact(contact._id)} />
      </Dropdown>
    </div>
  )
}

export default ContactListItem
