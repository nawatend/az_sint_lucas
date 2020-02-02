/* eslint-disable react/display-name */
import React from 'react';
import NavigationDetail from '../components/navigation/NavigationDetail'

const PersonLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/wieiswie" iconName="persons" />
            <main className="container">
                <Page />
            </main>
        </div>
    )
}

PersonLayout.displayName = "Person Base Layout"
export default PersonLayout