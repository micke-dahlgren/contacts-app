import React from "react"
import contactCardStyles from "./contactCard.module.css";
import ContextMenu from '../../contextMenu/contextMenu';


const contactCard = (props) => (    
    
    <div className={contactCardStyles.container}>
   
        <div className={`${contactCardStyles.child__name} ${contactCardStyles.center}`}>
            <div className={contactCardStyles.text__primary}>{props.contactData.name}</div>
        </div>
        <div className={`${contactCardStyles.child__phone} ${contactCardStyles.center}`}>
            <div className={contactCardStyles.text__secondary}>{props.contactData.phone}</div>
        </div>
        <div className={`${contactCardStyles.child__company} ${contactCardStyles.center}`}>
            <div className={contactCardStyles.text__secondary}>{props.contactData.company}</div>
        </div>
        <div className={`${contactCardStyles.child__options} ${contactCardStyles.center}`}>
            <ContextMenu
                items={[
                    {
                    label: 'Redigera',
                    onClick: () => props.setFormWindow('open', props.contactData._id),
                    },
                    {
                    label: 'Ta bort',
                    onClick: () => props.deleteContact(props.contactData._id),
                    }
            ]} 
            />  
        </div> 
            
            


    </div>
)

export default contactCard