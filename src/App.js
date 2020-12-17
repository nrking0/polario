import React, { useState, useEffect } from 'react';

// Styles
import './styles/styles.scss';

// Components

// React Imports (e.g. Material UI)

// Hooks
import useWindowUrl from './hooks/useWindowUrl';

function App() {

  const url = useWindowUrl();

  return (
    <div className="app-content">
      <p>{'Url: ' + url}</p>
    </div>
  );
}

export default App;
