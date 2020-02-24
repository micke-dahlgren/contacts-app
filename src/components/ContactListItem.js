import React from "react"

import Button from "./Button"

import styles from "./ContactListItem.module.scss"

const ContactListItem = ({ contact, onRemove }) => {
  return (
    <div className={styles.listItem}>
      <div className={styles.contactData}>
        <div>{contact.name}</div>
        <div>{contact.company ? contact.company : "-"}</div>
        <div>{contact.phone}</div>
      </div>
      <Button label="Remove" onClick={() => onRemove(contact._id)} />
    </div>
  )
}

export default ContactListItem
