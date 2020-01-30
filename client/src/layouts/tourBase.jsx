/* eslint-disable react/display-name */
import React from 'react';
import NavigationDetail from '../components/navigation/NavigationDetail'

const TourLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/rondleiding" iconName="tours" />
            <main className="container">
                <Page />
            </main>
        </div>
    )
}

TourLayout.displayName = "Tour Base Layout"
export default TourLayout