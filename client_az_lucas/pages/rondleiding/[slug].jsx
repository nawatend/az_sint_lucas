import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';

class TourPage extends Component {
    state = {
        films: [1, 2]
    }

    render() {
        return (<div>One Tour</div>)
    }
}

export default BaseLayout(TourPage)