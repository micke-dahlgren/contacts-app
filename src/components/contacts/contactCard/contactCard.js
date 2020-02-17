import React from "react"
import contactCardStyles from "./contactCard.module.css";


const contactCard = (props) => (    
    
    <div className={contactCardStyles.card} onClick={() => {console.log(props)}}>
         <p className={contactCardStyles.options} onClick={() =>{props.toggleModal()}}>...</p>
        <div className={contactCardStyles.columns} >
            <p className={contactCardStyles.name}>{props.contactData.name}</p>
            <p className={contactCardStyles.company}>{props.contactData.phone}</p>
            <p className={contactCardStyles.company}>{props.contactData.company}</p>
        </div>
    </div>
)

export default contactCard