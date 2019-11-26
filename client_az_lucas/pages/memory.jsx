import React, { Component } from 'react';
import BaseLayout from '../layouts/base';
import MemoryCard from '../components/spelletjes/memory/MemoryCard';

class MemoryPage extends Component {
    state = {}
    render() {
        return (<MemoryCard></MemoryCard>
            
            );
    }
}

export default BaseLayout(MemoryPage)