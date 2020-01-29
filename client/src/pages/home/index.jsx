import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';
import Lucas from '../../components/Lucas'
import Hospital from '../../components/Hospital'

import Bunny from '../../components/Bunny'
import Bush from '../../components/Bush'

let HomePage = () => {
    return (
        <div className="page">
            HOME
        <Lucas />
            <Hospital />
            <Bunny />
            <Bush />
        </div >
    )
}

export default BaseLayout(HomePage);