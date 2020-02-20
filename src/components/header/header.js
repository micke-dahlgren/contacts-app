import React from "react"
import headerStyles from "./header.module.css";
import { generateId } from "../contactFunctions/contactFunctions";


const Header = (props) => (
    <div className={headerStyles.container}>
        <h1 className={headerStyles.title}>Kontakter</h1>
        <ul className={headerStyles.ul}>
            <li key={generateId()} className={headerStyles.li}>
                <a 
                    key={generateId()}
                    href="#alla"
                    className= {(props.activePage === "alla") ? `${headerStyles.a} ${headerStyles.a__active}` : headerStyles.a }     
                    onClick= {() => {props.setActivePage("alla")}}
                    onKeyDown={() => {props.setActivePage("alla")}}
                    >Alla
                </a>
            </li>
            <li key={generateId()} className={headerStyles.li}>
                <a 
                    key={generateId()}
                    href="#vanner"
                    className= {(props.activePage === "vänner") ? `${headerStyles.a} ${headerStyles.a__active}` : headerStyles.a }     
                    onClick= {() => {props.setActivePage("vänner")}}
                    onKeyDown={() => {props.setActivePage("vänner")}}
                    >Vänner
                </a>
            </li>
            <li key={generateId()} className={headerStyles.li}>
                <a 
                    key={generateId()}
                    href="#kollegor"
                    className= {(props.activePage === "kollegor") ? `${headerStyles.a} ${headerStyles.a__active}` : headerStyles.a }             
                    onClick= {() => {props.setActivePage("kollegor")}}
                    onKeyDown={() => {props.setActivePage("kollegor")}}
                    >Kollegor
                </a>
            </li>
            <li key={generateId()} className={`${headerStyles.li} ${headerStyles.btn__container}`}>

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
