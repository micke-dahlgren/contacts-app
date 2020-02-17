import React from "react"
import headerStyles from "./header.module.css";


const Header = (props) => (
    <div className={headerStyles.header}>
        <div className={headerStyles.title}>Kontakter
        </div>
        <div className={headerStyles.linkContainer}>
            <div 
                className= {(props.activePage === "alla") ? headerStyles.link__current : headerStyles.link }
                onClick= {() => {props.setPage("alla")}}
                >Alla</div>
            <div 
                className= {(props.activePage === "vänner") ? headerStyles.link__current : headerStyles.link }
                onClick= {() => {props.setPage("vänner")}}
                >Vänner</div>
            <div 
                className= {(props.activePage === "kollegor") ? headerStyles.link__current : headerStyles.link }                
                onClick= {() => {props.setPage("kollegor")}}
                >Kollegor</div>
            <div className="customButton_primary" onClick={() =>{props.toggleModal()}}>Lägg till</div>
        </div>     
    </div>
)

export default Header;

