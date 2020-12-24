import { useState, useEffect } from 'react';
import BiasSlider from '../BiasSlider/BiasSlider';
import Accuracy from '../Accuracy/Accuracy';
import Score from '../Score/Score';
import './Report.scss';

const Report = (props) => {

    return (
        <div className="report-content">
            <div className="section">
                <BiasSlider bias={props.bias} />
            </div>
            <div className="section">
                <Accuracy accuracy={props.accuracy} />
            </div>
            <div className="section">
                <Score score={props.score} />
            </div>
        </div>
    )
}

export default Report;