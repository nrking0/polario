import React, { useState, useEffect } from 'react';

// Styles
import './styles/styles.scss';

// Components

// React Imports (e.g. Material UI)

// Hooks
import useWindowUrl from './hooks/useWindowUrl';
import useWebsiteRating from './hooks/useWebsiteRating';

function App() {

  const url = useWindowUrl();
  const rating = useWebsiteRating(`https://${url}`);

  return (
    <div className="app-content">
      <h1>Polario</h1>
      <p>{'Url: ' + url}</p>
      {rating !== null && rating !== undefined ? (
        <p>Rating is {rating.bias}</p>
      ) : (
        <p>Not found</p>
      )}
    </div>
  );
}

export default App;
