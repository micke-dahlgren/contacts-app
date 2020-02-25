import React from "react"
import styles from "./ContactForm.module.scss"

const ContactForm = ({ data, onSubmit }) => {
  const handleFormSubmit = event => {
    event.preventDefault()
    const { name, company, phone } = event.target
    const data = {
      name: name.value,
      company: company.value,
      phone: phone.value,
    }
    onSubmit(data)
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.contactForm}>
      Name:
      <input name="name" type="text" defaultValue={data ? data.name : ""} />
      Company:
      <input
        name="company"
        type="text"
        defaultValue={data ? data.company : ""}
      />
      Phone:
      <input name="phone" type="number" defaultValue={data ? data.phone : ""} />
      <button type="submit" />
    </form>
  )
}

export default ContactForm
