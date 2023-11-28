import './shop.sass';
import ReactSlider from 'react-slider';
import React, { useState } from 'react';

export default function shopall () {
    return(
    <div className="price">
    <ReactSlider
    className="horizontal-slider"
    thumbClassName="example-thumb"
    trackClassName="example-track"
    defaultValue={[0, 100]}
    ariaLabel={['Lower thumb', 'Upper thumb']}
    ariaValuetext={state => `Thumb value ${state.valueNow}`}
    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    pearling
    minDistance={10}
    />
    </div>
    )
}

