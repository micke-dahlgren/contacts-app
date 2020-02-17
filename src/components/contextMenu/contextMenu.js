import React from "react";
import ContextStyles from './contextMenu.module.css';
class Container extends React.Component  {

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
            <div
                role="menuItem"
                className={ContextStyles.item} 
                onClick={item.onClick}
                onKeyDown={item.onClick}
            >{item.label}</div>
            )
            i -= 1;
        });
        return items;
    }

    render() {
        return (
            <div>
                <div 
                    role="button"
                    className={ContextStyles.btnContainer}
                    onClick = {() => {this.toggleContextMenu()} }
                    onKeyDown = {() => {this.toggleContextMenu()} }
                >...</div>
            {this.state.menuOpen ? 
                    <div>
                        
                        <div 
                            role="dialog"
                            className={ContextStyles.menuContainer}
                            onClick = {() => {this.toggleContextMenu()} }
                            onKeyDown = {() => {this.toggleContextMenu()} }
                        >
                            {this.getItems(this.props.items)}
                        </div>
                        <div 
                            role="dialog"
                            className="overlay transparent" 
                            onClick={() => {this.toggleContextMenu()}}
                            onKeyDown = {() => {this.toggleContextMenu()} }
                        />
                    </div>
                : 
                <div></div>
            }
            </div>
        )
    }
}
export default Container;
