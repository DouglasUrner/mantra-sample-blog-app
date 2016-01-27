import Navigation from '../navigation/index.jsx';
import React from 'react';

const Layout = ({content = () => null }) => (
  <div>
    <header>
      <Navigation />
    </header>

    <div>
    {content()}
    </div>

    <footer>
      <div className="container">
        <p className="text-muted">
          Built with <a href='https://github.com/kadirahq/mantra'>Mantra </a>
          & Meteor.
        </p>
      </div>
    </footer>
  </div>
);

export default Layout;
