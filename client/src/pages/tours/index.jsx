import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';
import NavigationDetail from '../../components/navigation/NavigationDetail'
let ToursPage = () => {
    return (
        <div className="background__main" style={{ backgroundImage: `url(./svgs/backgrounds/bg_water.svg)` }}>
            <NavigationDetail path="/rondleiding" iconName="tours" />
            <main className="page">
                hi Rondleiding menu
            </main>
        </div>
    )
}

export default ToursPage;