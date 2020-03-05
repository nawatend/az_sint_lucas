/* eslint-disable react/display-name */
import React from 'react';
import Navigation from '../components/navigation/Nagivation'

const BaseLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(${window.location.origin}/svgs/backgrounds/bg_main_min.svg)` }}>
            <Navigation />
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

BaseLayout.displayName = "Base Layout"
export default BaseLayout