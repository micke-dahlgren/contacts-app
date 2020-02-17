import React from "react"
import modalStyles from "./modal.module.css";

const Modal = (props) => (    
  <div>
  <div className={modalStyles.overlay} onClick={() => {this.toggleModal()}}/>

  <div className={modalStyles.container}>

    <div className={modalStyles.Title} />
    <div className="inputFieldContainer">
      <div className="inputField">bla</div>
    </div>

    <div className="inputFieldContainer">
      <div className="inputField">bla</div>
    </div>

    <div className="inputFieldContainer">
      <div className="inputField">bla</div>
    </div>

    <div className={modalStyles.buttonContainer}>
      <div className="customButton_primary">Spara</div>
      <div className="customButton_secondary" onClick={() =>{props.toggleModal()}}>Avbryt</div>
      <div className="customButton_primary btn-delete" onClick={() =>{props.toggleModal()}}>Delete</div>
    </div>

  </div>
  
</div>
)

export default Modal;


