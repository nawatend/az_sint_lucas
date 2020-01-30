import React, { Component } from 'react';
import BaseLayout from '../../layouts/base';
import Lucas from '../../components/Lucas'
import Hospital from '../../components/Hospital'

import Bunny from '../../components/Bunny'
import Bush from '../../components/Bush'
import Pole from '../../components/Pole'
let HomePage = () => {
    return (
        <div className="page">
            HOME
            <Lucas type="HI" />
            <Hospital />
            <Bunny />
            <Bush />
            <Pole />
        </div >
    )
}

export default BaseLayout(HomePage);