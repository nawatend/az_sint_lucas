/* eslint-disable react/display-name */
import React from 'react';
import Navigation from '../components/navigation/Nagivation'

const TourLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/backgrounds/bg_grass.svg)` }}>
            <Navigation />
            <main className="container">
                <Page />
            </main>
        </div>
    )
}

TourLayout.displayName = "Tour Base Layout"
export default TourLayout