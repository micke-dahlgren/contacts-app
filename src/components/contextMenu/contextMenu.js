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
        
        });
        return items;
    }

    render() {
        return (
            <div>

            
                <div  className={ContextStyles.parent}>
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
                        </div>
                    : 
                        <div />
                    }
                </div>
                {this.state.menuOpen ?
                    <div 
                        className="overlay" 
                        onClick={() => {this.toggleContextMenu()}}
                            />
                    : 
                        <div /> 
                }
            </div>
        )
    }
}
export default ContextMenu;
