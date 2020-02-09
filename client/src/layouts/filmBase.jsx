/* eslint-disable react/display-name */
import React from 'react';
import NavigationDetail from '../components/navigation/NavigationDetail'

const FilmLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/backgrounds/bg_film.svg)` }}>
            <NavigationDetail path="/filmpjes" iconName="films" />
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

FilmLayout.displayName = "Film Base Layout"
export default FilmLayout