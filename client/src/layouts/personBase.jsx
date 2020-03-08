/* eslint-disable react/display-name */
import React from 'react';
import NavigationDetail from '../components/navigation/NavigationDetail'

const PersonLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/wieiswie" iconName="persons" />
            <main className="container">
                <Page />
            </main>
            <div className="clouds">
                <div id="background-wrap">
                    <div className="x1">
                        <div className="cloud"></div>
                    </div>

                    <div className="x2">
                        <div className="cloud"></div>
                    </div>

                    <div className="x3">
                        <div className="cloud"></div>
                    </div>

                    <div className="x4">
                        <div className="cloud"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

PersonLayout.displayName = "Person Base Layout"
export default PersonLayout