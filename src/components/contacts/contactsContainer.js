import React from "react"
import contactsStyles from "./contacts.module.css";

const Contacts = (props) => (
  <ul className={contactsStyles.container}>
    {props.getContactCards()}
  </ul>
)

export default Contacts;

/* HTML Formatted */