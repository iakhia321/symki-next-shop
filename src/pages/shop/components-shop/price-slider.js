import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { InputNumber } from 'antd';
import './price.sass'



const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);

  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
  };

  const handleInputChange = (value, index) => {
    const newRange = [...priceRange];
    newRange[index] = value;
    setPriceRange(newRange);
  };

  return (
    <div className="shop-header">
        <h3>Shop-all</h3>

    
      <div className="Price">
        <p>Price Range: ₺{priceRange[0]} - ₺{priceRange[1]}</p>
        <Slider
         className="Slider-price"
         range
         min={0}
         max={100}
         value={priceRange}
         onChange={handlePriceChange}
        />
        <InputNumber
         className="InputNumber"
         style={{ margin: '0 16px' }}
         value={priceRange[0]}
         onChange={(value) => handleInputChange(value, 0)}
        />
        -
        <InputNumber
         className="InputNumber2"
         style={{ margin: '0 16px' }}
         value={priceRange[1]}
         onChange={(value) => handleInputChange(value, 1)}
        />
      </div>
      <div className="leftbar">
        <div className="leftbar__symki">
        <button className="symki">Symki</button>
        <button className="symki">Korzina</button>
        <button className="symki">Paket</button>
        </div>
      </div>
    </div>
      
      
  );
};

export default PriceSlider;