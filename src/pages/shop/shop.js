import './shop.sass';

export default function shopall() {
    return(
    <div class="price-range-container">
        <label for="priceRange">Price Range:</label>
        <input type="range" id="priceRange" min="0" max="100" step="1" value="50" />
        <p id="priceValue">50</p>
    </div>
    )
}