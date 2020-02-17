import React from "react"
import contactCardStyles from "./contactCard.module.css";
import ContextMenu from '../../contextMenu/contextMenu';


const contactCard = (props) => (    
    
    <div className={contactCardStyles.card}>
        <div className={contactCardStyles.columns} >

            <p className={contactCardStyles.name}>{props.contactData.name}</p>
            <p className={contactCardStyles.company}>{props.contactData.phone}</p>
            <p className={contactCardStyles.company}>{props.contactData.company}</p>
            <ContextMenu
                items={[
                    {
                    label: 'Edit',
                    onClick: () => props.setFormWindow('open', props.contactData._id),
                    },
                    {
                    label: 'Delete',
                    onClick: () => props.deleteContact(props.contactData._id),
                    }
            ]} 
            />
        </div>
    </div>
)

export default contactCard