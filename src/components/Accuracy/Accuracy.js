import { useState, useEffect } from 'react';
import './Accuracy.scss';

const Accuracy = (props) => {

    const backgroundColor = {
        "satire": "warning",
        "fake": "warning",
        "very low": "warning",
        "low": "warning",
        "mixed": "caution",
        "mostly factual": "good",
        "high": "excellent",
        "very high": "excellent"
    }

    return (
        <div className={`accuracy-content ${backgroundColor[props.accuracy]}`}>
            <h3 className="accuracy-text">{props.accuracy.toUpperCase()}</h3>
        </div>
    )
}

export default Accuracy;