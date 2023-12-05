import './shop.sass';
import PriceSlider from './components-shop/price-slider'
import {Korzina3} from './Korzina3/Korzina3'
import {Paket2} from './Paket2/Paket2'
import {Symka1} from './Symka1/Symka1'
import React, { useState } from 'react';

export default function shopall () {
    return(
    <div>
        <Symka1></Symka1>
        <Paket2></Paket2>
        <Korzina3></Korzina3>
        <PriceSlider></PriceSlider>
    </div>
    )
}

