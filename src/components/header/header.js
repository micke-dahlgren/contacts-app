import React from "react"
import headerStyles from "./header.module.css";


const Header = (props) => (
    <div className={headerStyles.header}>
        <div className={headerStyles.title}>Kontakter
        </div>
        <div className={headerStyles.linkContainer}>
            <div 
                role = "link"
                className= {(props.activePage === "alla") ? headerStyles.link__current : headerStyles.link }
                onClick= {() => {props.setActivePage("alla")}}
                onKeyDown={() => {props.setActivePage("alla")}}
                >Alla</div>
            <div 
                role = "link"
                className= {(props.activePage === "vänner") ? headerStyles.link__current : headerStyles.link }
                onClick= {() => {props.setActivePage("vänner")}}
                onKeyDown={() => {props.setActivePage("vänner")}}
                >Vänner</div>
            <div 
                role = "link"
                className= {(props.activePage === "kollegor") ? headerStyles.link__current : headerStyles.link }                
                onClick= {() => {props.setActivePage("kollegor")}}
                onKeyDown={() => {props.setActivePage("kollegor")}}
                >Kollegor</div>
            <div 
                role = "button"
                className="btn btn--primary" 
                onClick={() =>{props.setFormWindow('open','')}}
                onKeyDown={() =>{props.setFormWindow('open','')}}
                >Lägg till</div>
        </div>     
    </div>
)

export default Header;

