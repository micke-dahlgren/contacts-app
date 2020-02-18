import React from "react"
import contactsStyles from "./contacts.module.css";

const Contacts = (props) => (
  <div className={contactsStyles.container}>
    {props.getContactCards()}
  </div>
)

export default Contacts;

/* HTML Formatted */