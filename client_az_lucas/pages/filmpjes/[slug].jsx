import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';

class FilmPage extends Component {
    state = {
        films: [1, 2]
    }

    render() {
        return (<div>One Film</div>)
    }
}

export default BaseLayout(FilmPage)