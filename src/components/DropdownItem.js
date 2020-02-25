import React from "react"

import styles from "./DropdownItem.module.scss"

const DropdownItem = ({ label, onClick, hideDropdown }) => {
  const handleOnClick = () => {
    onClick()
    if (hideDropdown) hideDropdown()
  }
  return (
    <div className={styles.dropdownItem} onClick={handleOnClick}>
      {label}
    </div>
  )
}

export default DropdownItem
