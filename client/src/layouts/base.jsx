/* eslint-disable react/display-name */
import React from 'react';
// import Nav from '../components/nav'

const BaseLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/bg_main_min.svg)` }}>
            {/* // <Nav /> */}
            <main className="container">
                <Page />
            </main>
        </div>
    )

}

BaseLayout.displayName = "Base Layout"
export default BaseLayout