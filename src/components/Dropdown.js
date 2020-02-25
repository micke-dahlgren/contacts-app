import React from "react"

import useIsComponentVisible from "../hooks/useIsComponentVisible"

import Button from "./Button"

import styles from "./Dropdown.module.scss"

const Dropdown = ({ label, component, children, type = "default" }) => {
  const {
    ref,
    isComponentVisible,
    setIsComponentVisible,
  } = useIsComponentVisible(false)

  const toggleDropdown = () => {
    setIsComponentVisible(!isComponentVisible)
  }

  const hideDropdown = event => {
    if (event.type === "click" && type === "default") {
      setIsComponentVisible(false)
    }
    if (event.type === "submit" && type === "form") setIsComponentVisible(false)
  }

  return (
    <div>
      <Button label={label} onClick={toggleDropdown} />
      {isComponentVisible && (
        <div
          ref={ref}
          onSubmit={hideDropdown}
          onClick={hideDropdown}
          className={styles.container}
        >
          <div>{children}</div>
        </div>
      )}
    </div>
  )
}

export default Dropdown
