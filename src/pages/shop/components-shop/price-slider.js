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
    <div className="Price">
      <p>Price Range: ${priceRange[0]} - ${priceRange[1]}</p>
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
        style={{ margin: '0 16px' }}
        value={priceRange[1]}
        onChange={(value) => handleInputChange(value, 1)}
      />
    </div>
  );
};

export default PriceSlider;