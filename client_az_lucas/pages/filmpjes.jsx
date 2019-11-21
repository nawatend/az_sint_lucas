import React, { Component } from 'react';
import BaseLayout from '../layouts/base';

class FilmsPage extends Component {
    state = {
        films: [1, 2]
    }

    render() {
        return (<div>Films</div>)
    }
}

export default BaseLayout(FilmsPage)