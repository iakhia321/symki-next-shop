import React from 'react';

const ScrollButton = () => {
  const scrollToSection = () => {
    const sectionElement = document.getElementById('targetSection');
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={scrollToSection}>
      Перейти к следующему разделу
    </button>
  );
};

export default ScrollButton;