import React, { useState, useEffect } from 'react';

// Styles
import './styles/styles.scss';

// Components
import BiasSlider from './components/BiasSlider/BiasSlider';
import Accuracy from './components/Accuracy/Accuracy';

// React Imports (e.g. Material UI)
import { Divider } from '@material-ui/core';

// Hooks

//data 
import mbfc from './data/mbfc.json';
import points from './data/points.json';

function App() {

  const [url, setUrl] = useState();
  const [rating, setRating] = useState();
  const [scores, setScores] = useState();

  let count = 0;

  useEffect(() => {
    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        setUrl(new URL(tabs[0].url).hostname);
      }
    );

    if (url !== "" && url !== undefined) {
      const search_results = mbfc.sources.find(source => {
        return source.url.indexOf(url) !== -1 || source.url.indexOf(url.substring(4)) !== -1;
      });

      if (search_results !== undefined) {
        let bias_score = points[1][search_results.bias];
        let accuracy_score = points[0][search_results.accuracy];

        setRating(search_results);
        setScores([bias_score, accuracy_score]);
      }
    }


  }, [url, rating, scores])

  return (
    <div className="app-content">
      <h1 className="app-title">Polario Bias Report</h1>
      <div className="report-content">
        {rating !== undefined && rating !== null ? (
          <div>
            <Divider />
            <h3>{rating.bias}</h3>
            <BiasSlider bias={rating.bias} />
            <h2>Source accuracy</h2>
            <Divider />
            <Accuracy accuracy={rating.accuracy} />
            <h2>Score</h2>
            <Divider />
            <h2>{`${scores[0] + scores[1]} / 10`}</h2>
          </div>
        ) : (
            <h3>
              It appears there is no bias documeted for this webiste! Please feel free to submit
              a report and/or suggestion.
            </h3>
          )}
      </div>

    </div>
  );
}

export default App;
