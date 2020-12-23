import React, { useState, useEffect } from 'react';

// Styles
import './styles/styles.scss';

// Components

// React Imports (e.g. Material UI)

// Hooks

//data 
import mbfc from './data/mbfc.json';
import points from './data/points.json';

function App() {

  const [url, setUrl] = useState();
  const [rating, setRating] = useState();
  const [scores, setScores] = useState();

  useEffect(() => {
    let current_url = "";


    chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
      function (tabs) {
        setUrl("https://" + new URL(tabs[0].url).hostname);
      }
    );

    const search_results = mbfc.sources.find(source => {
      return source.url === url;
    });

    console.log(points)
    if (search_results !== undefined) {

      let bias_score = points[1][search_results.bias];
      let accuracy_score = points[0][search_results.accuracy];

      setUrl(current_url);
      setRating(search_results);
      setScores([bias_score, accuracy_score]);
    }


  }, [url, rating, scores])

  return (
    <div className="app-content">
      <h2 className="app-title">Polario Bias Report</h2>
      <div className="report-content">
        {rating !== undefined && rating !== null ? (
          <div>
            <h4>Bias: {rating.bias} </h4>
            <h4>Source accuracy: {rating.accuracy}</h4>
            <h4>{`Score: ${scores[0] + scores[1]} / 10`}</h4>
          </div>
        ) : (
            <h4>It appears there is no bias documeted for this webiste! Please feel free to submit
            a report and/or suggestion.
            </h4>
          )}
      </div>

    </div>
  );
}

export default App;
