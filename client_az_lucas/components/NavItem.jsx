import React, { Component } from 'react';

class NavItem extends Component {
    state = { title: 'home' }
    render() {
        return (<div>{this.state.title}</div>);
    }
}

export default NavItem;