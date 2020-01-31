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
        </div>
    )
}

FilmLayout.displayName = "Film Base Layout"
export default FilmLayout