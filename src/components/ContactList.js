import React from "react"

import styles from "./ContactList.module.scss"

const ContactList = ({ dataSource, renderItem }) => {
  return (
    <div className={styles.contactList}>
      {dataSource.map(item => renderItem(item))}
    </div>
  )
}

export default ContactList
