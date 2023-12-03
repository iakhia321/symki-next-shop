import './shop.sass';
import PriceSlider from './components-shop/price-slider'
import {Symka} from './Symka/Symka';
import {Paket} from './Paket/Paket';
import {Korzina} from './Korzina/Korzina';
import React, { useState } from 'react';

export default function shopall () {
    return(
    <div>
        <Korzina></Korzina>
        <Paket></Paket>
        <Symka></Symka>
        <PriceSlider></PriceSlider>
    </div>
    )
}

