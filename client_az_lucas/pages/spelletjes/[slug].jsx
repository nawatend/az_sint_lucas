import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';

class GamePage extends Component {
    state = {
        films: [1, 2]
    }

    render() {
        return (<div>One Game</div>)
    }
}

export default BaseLayout(GamePage)