import React from "react"
import styles from "./AddContactForm.module.scss";

const AddContactForm = ({ onSubmit }) => {

  const handleOnSubmit = e => {
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        company: e.target.company.value,
        phone: e.target.phone.value
    }
    onSubmit(data)
  }

  return (
    <form onSubmit={handleOnSubmit} className={styles.contactForm}>
      Name:
      <input name="name" type="text" />
      Company:
      <input name="company" type="text" />
      Phone:
      <input name="phone" type="number" />
      <button type="submit" />
    </form>
  )
}

export default AddContactForm;
