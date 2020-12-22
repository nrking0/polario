import { useState, useEffect } from 'react';

const bias_points = {
    "left": 1,
    "left-center": 3,
    "least": 4,
    "least biased": 4,
    "right-center": 3,
    "right": 1,

    "fake": 0,
    "conspiracy": 0,
    "conspiracy/pseudoscience": 0,
    "satire": 0,
    "questionable": 1,
    "pro-science": 4,

    "not parsed": -1,
    "": -1
}

const accuracy_points = {
    "satire": 0,
    "fake": 0,
    "very low": 1,
    "low": 2,
    "mixed": 3,
    "mostly factual": 4,
    "high": 5,
    "very high": 6,

    "not parsed": -1
}

const useWebsitePoints = (bias, accuracy) => {

    const [score, setScore] = useState();

    useEffect(() => {

        let bias_score = bias_points[bias];
        let accuracy_score = accuracy_points[accuracy];

        setScore([bias_score, accuracy_score]);

    })

    return score;
}

export default useWebsitePoints;