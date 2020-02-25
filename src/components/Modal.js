import React from "react"

import styles from "./Modal.module.scss"

const Modal = ({ children, visible = false }) => {
  return (
    visible && (
      <>
        <div className={styles.modal}>{children}</div>
        <div className={styles.pageMask} />
      </>
    )
  )
}

export default Modal
