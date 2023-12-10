import './shop.sass';
import PriceSlider from './components-shop/price-slider'
import React, { useState } from 'react';
import  ShopCard  from './ShopCard/ShopCard';

export default function shopall () {
    return(
    <div>
        <ShopCard/>
        <PriceSlider/>
    </div>
    )
}

