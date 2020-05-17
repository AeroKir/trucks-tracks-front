import React from 'react';
import MapContainer from '../containers/MapContainer';

import './Layout.css';

function Layout() {
  return (
    <div className="Layout">
      <header className="Header">
        <nav>
          <ul>
            <li>
              <a href="">header</a>
              <a href="">Drivers</a>
              <a href="">Trucks</a>
              <a href="">Map view</a>
            </li>
          </ul>
        </nav>
        <aside className="Aside">
          <p>aside</p>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </aside>
        <main className="Main">
          <MapContainer />
        </main>
      </header>
    </div>
  );
}

export default Layout;
