import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component {

  constructor(props){
    super(props)
    this.state = {
      displayMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true}, () => {
      document.addEventListener('click', this.hideMenu)
    });
  }

  hideMenu() {
    this.setState({ displayMenu: false}, () => {
      document.removeEventListener('click', this.hideMenu)
    });
  }

  render() {
    return (
      <div className="dropdownMenu">
        <div className="button" onClick={this.showMenu}>Menu</div>
      
        { this.state.displayMenu ?
          (<ul>
            <li>wvdfgdf</li>
            <li>dfbdfb</li>
            <li>dfbdfb</li>
            <li>dfbdfb</li>
            <li>adfsdbf</li>
          </ul>)
          :
          ( null )
        }
      
      </div>
    );
  }
}

export default Menu;