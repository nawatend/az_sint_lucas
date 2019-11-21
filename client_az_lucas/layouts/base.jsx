/* eslint-disable react/display-name */
import React from 'react';
import Nav from '../components/nav'

const BaseLayout = (Page) => {

    return  () => (
        <div>
            <Nav />
            <main className="container">
                <Page />
            </main>
        </div>
    )

}

BaseLayout.displayName = "Base Layout"
export default BaseLayout