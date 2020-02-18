import React from "react"
import headerStyles from "./header.module.css";
import { generateId } from "../contactFunctions/contactFunctions";


const Header = (props) => (
    <div className={headerStyles.header}>
        <div className={headerStyles.title}>Kontakter
        </div>
        <ul className={headerStyles.linkContainer}>
            <li key={generateId()}>
                <a 
                    key={generateId()}
                    href="#alla"
                    className= {(props.activePage === "alla") ? headerStyles.link__current : headerStyles.link }
                    onClick= {() => {props.setActivePage("alla")}}
                    onKeyDown={() => {props.setActivePage("alla")}}
                    >Alla
                </a>
            </li>
            <li key={generateId()}>
                <a 
                    key={generateId()}
                    href="#vanner"
                    className= {(props.activePage === "vänner") ? headerStyles.link__current : headerStyles.link }
                    onClick= {() => {props.setActivePage("vänner")}}
                    onKeyDown={() => {props.setActivePage("vänner")}}
                    >Vänner
                </a>
            </li>
            <li key={generateId()}>
                <a 
                    key={generateId()}
                    href="#kollegor"
                    className= {(props.activePage === "kollegor") ? headerStyles.link__current : headerStyles.link }                
                    onClick= {() => {props.setActivePage("kollegor")}}
                    onKeyDown={() => {props.setActivePage("kollegor")}}
                    >Kollegor
                </a>
            </li>
            <li key={generateId()}>
                <button
                    key={generateId()}
                    className="btn btn--primary" 
                    onClick={() =>{props.setFormWindow('open','')}}
                    >Lägg till
                </button>
            </li>
        </ul> 
  
            
    </div>
)

export default Header;

/* HTML Formatted */