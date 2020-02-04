/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import Navigation from '../components/navigation/Nagivation'

const BaseLayout = (Page) => {

    return () => (
        <div className="background__main" style={{ backgroundImage: `url(/svgs/bg_main_min.svg)` }}>
            <Navigation />
            <main className="container">
                <Page />
            </main>
        </div>
    )
}

BaseLayout.displayName = "Base Layout"
export default BaseLayout