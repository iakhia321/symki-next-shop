import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { InputNumber } from 'antd';
import './price.sass'
import ScrollButton from './../ScrollButton/ScrollButton'



const PriceSlider = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);

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
      <div className="Price">
        <p style={{ margin: '0 16px' }}>Price Range: ₺{priceRange[0]} - ₺{priceRange[1]}</p>
        <Slider
         className="Slider-price"
         range
         min={0}
         max={500}
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
        <ScrollButton/>
        <div>
      {/* Ваш текущий контент */}
      <div>
        <h2>Раздел 1</h2>
        {/* Ваш контент раздела 1 */}
      </div>

      {/* Кнопка для прокрутки */}
      <ScrollButton />

      {/* Ваш текущий контент */}
      <div id="targetSection">
        <h2>Раздел 2</h2>
        {/* Ваш контент раздела 2 */}
      </div>

      {/* Ваш текущий контент */}
    </div>
      </div>
  +
    </div>
      
      
  );
};

export default PriceSlider;