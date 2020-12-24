import { useState, useEffect } from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Score.scss';

const Score = (props) => {

    return (
        <div className="score-content">
            <CircularProgressbarWithChildren value={props.score * 10}>
                <h1 className="score-text">{props.score}</h1>
            </CircularProgressbarWithChildren>
        </div>
    )
}

export default Score;