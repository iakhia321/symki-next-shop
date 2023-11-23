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
                <div className="field">
                    <span>Min</span>
                    <input type="number" class="input-min" value="100"></input>
                </div>
                <div className="separator">-</div>
                <div className="field">
                    <span>Max</span>
                    <input type="number" class="input-min" value="2000"></input>
                </div>
                <div class="slider">
                    <div className="progress"></div>
                </div>
            </div>
        </div>
    </div>
    )
}