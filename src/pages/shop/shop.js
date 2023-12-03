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
import React, { useState } from 'react';

const PriceRangeSlider = () => {
    const [price, setPrice] = useState(50);

    const handlePriceChange = (e) => 
        setPrice(e.target.value);
    };
export default function shopall () {
    return(
    <div class="price-range-container">
        <label for="priceRange">Price Range:</label>
        <input type="range" id="priceRange" min="0" max="100" step="1" value="50" />
        <p id="priceValue">50</p>
    </div>
    )
}

