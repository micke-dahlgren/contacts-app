import React from "react";
import ContextStyles from './contextMenu.module.css';
import {generateId} from "../contactFunctions/contactFunctions";

class ContextMenu extends React.Component  {

    constructor(props) {
        super(props);
        this.state = { 
            menuOpen:false,
        };
    }

    
    toggleContextMenu = () => {
      let menuOpen = this.state.menuOpen;
      this.setState({
        menuOpen: !menuOpen,
      })
    }


    getItems = (itemArray) =>{
        let items = [];
        let i = 0;
        itemArray.forEach(item => {
            items.push(
            <li key={generateId()}>
                <button
                    key={generateId()}
                    className={ContextStyles.item}
                    onClick={item.onClick}
                >{item.label}
                </button>
            </li>
            )
            i -= 1;
        });
        return items;
    }

    render() {
        return (
            <div>
                <button 
                    className={ContextStyles.context__btn}
                    onClick = {() => {this.toggleContextMenu()} }
                >...
                </button>
                {this.state.menuOpen ? 
                        <div>
                            
                            <ul  
                                className={ContextStyles.menuContainer}
                                onClick = {() => {this.toggleContextMenu()} }
                            >
                                {this.getItems(this.props.items)}
                            </ul>

                            <div 
                                className="overlay transparent" 
                                onClick={() => {this.toggleContextMenu()}}
                            />
                        </div>
                    : 
                        <div />
                }
            </div>
        )
    }
}
export default ContextMenu;

/* HTML Formatted */