import './shop.sass';

export default function shopall() {
    return(
    <div className="dom">
        <div className="wrapper">
            <header>
                <h2>Цена</h2>
                <p>Use slider or enter min and max price</p>
            </header>
            <div className="price-input">
                <div className="price-input__field">
                    <span>Min</span>
                    <input type="number" class="input-min" value="100"></input>
                </div>
                <div className="price-input__separator">-</div>
                <div className="price-input__field">
                    <span>Max</span>
                    <input type="number" class="input-min" value="2000"></input>
                </div>
                <div class="price-input__slider">
                    <div className="slider__progress"></div>
                </div>
            </div>
        </div>
    </div>
    )
}