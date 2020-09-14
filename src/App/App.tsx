import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import IFrameExample from '../IFrameExample/IFrameExample';
import ObjectExample from '../ObjectExample/ObjectExample';

import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles['app']}>
        <header>
          <h1>Tableau Web Integration</h1>
        </header>
        <nav className={styles['nav']}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/iframe">IFrame Example</Link>
            </li>
            <li>
              <Link to="/object">Object Example</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/iframe">
              <IFrameExample />
            </Route>
            <Route path="/object">
              <ObjectExample />
            </Route>
            <Route path="/">
              <div>Home</div>
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
