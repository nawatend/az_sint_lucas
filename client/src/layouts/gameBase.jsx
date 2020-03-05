/* eslint-disable react/display-name */
import React from 'react';
import NavigationDetail from '../components/navigation/NavigationDetail'

const GameLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(${window.location.origin}/svgs/backgrounds/bg_grass.svg)` }}>
            <NavigationDetail path="/spelletjes" iconName="games" />
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

GameLayout.displayName = "Game Base Layout"
export default GameLayout