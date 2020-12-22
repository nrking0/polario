import React, { useState, useEffect } from 'react';

// Styles
import './styles/styles.scss';

// Components

// React Imports (e.g. Material UI)

// Hooks
import useWindowUrl from './hooks/useWindowUrl';
import useWebsiteRating from './hooks/useWebsiteRating';
import useWebsitePoints from './hooks/useWebsitePoints';

function App() {

  const url = useWindowUrl();
  const rating = useWebsiteRating(`https://${url}`);

  return (
    <div className="app-content">
      <h2 className="app-title">Polario Bias Report</h2>
      <div className="report-content">
        {rating !== undefined && rating !== null ? (
          <div>
            <h4>Bias: {rating.bias} </h4>
            <h4>Source accuracy: {rating.accuracy}</h4>
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
