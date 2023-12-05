import './shop.sass';
import PriceSlider from './components-shop/price-slider'
import {s_i} from './s_i/s_i'
import React, { useState } from 'react';

export default function shopall () {
    return(
    <div>
        <s_i/>
        <PriceSlider></PriceSlider>
    </div>
    )
}

