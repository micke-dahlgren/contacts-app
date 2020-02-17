import React from "react"
import contactsStyles from "./contacts.module.css";

const Contacts = (props) => (
  <div className={contactsStyles.container}>
    {props.getContactItems()}
  </div>
)

export default Contacts;

