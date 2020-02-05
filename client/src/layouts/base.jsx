/* eslint-disable react/display-name */
import React from 'react';
import Navigation from '../components/navigation/Nagivation'

const BaseLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/bg_main_min.svg)` }}>
            <Navigation />
            <main className="container">
                <Page />
            </main>
            <div className="clouds">
                <div id="background-wrap">
                    <div class="x1">
                        <div class="cloud"></div>
                    </div>

                    <div class="x2">
                        <div class="cloud"></div>
                    </div>

                    <div class="x3">
                        <div class="cloud"></div>
                    </div>

                    <div class="x4">
                        <div class="cloud"></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

BaseLayout.displayName = "Base Layout"
export default BaseLayout