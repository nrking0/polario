import { useState, useEffect } from 'react';

import './BiasSlider.scss';

const BiasSlider = (props) => {

    return (
        <div className="bias-slider-wrapper">
            <div className="bias-slider">
                <div className="dots">
                    <div className={props.bias === "left" ? "fill" : "no-fill"} />
                    <div className={props.bias === "left-center" ? "fill" : "no-fill"} />
                    <div className={props.bias === "least biased" || props.bias === "least" ? "fill" : "no-fill"} />
                    <div className={props.bias === "right-center" ? "fill" : "no-fill"} />
                    <div className={props.bias === "right" ? "fill" : "no-fill"} />
                </div>
            </div>
            <div className="bias-labels">
                <p>Left</p>
                <p>Left-center</p>
                <p>Least biased</p>
                <p>Right-center</p>
                <p>Right</p>
            </div>
        </div>
    )
}

export default BiasSlider;