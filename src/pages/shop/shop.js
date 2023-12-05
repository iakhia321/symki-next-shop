import './shop.sass';
import PriceSlider from './components-shop/price-slider'
import {Korzina} from './Korzina/Korzina'
import {Paket} from './Paket/Paket'
import {Symka} from './Symka/Symka'
import React, { useState } from 'react';

export default function shopall () {
    return(
    <div>
        <Symka></Symka>
        <Paket></Paket>
        <Korzina></Korzina>
        <PriceSlider></PriceSlider>
    </div>
    )
}

