import React from 'react';

const Navigation = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed"
          data-toggle="collapse" data-target="#main-navbar-collapse-1"
          aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Mantra Voice</a>
      </div>

      <div className="collapse navbar-collapse" id="main-navbar-collapse-1">
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="/">Home<span className="sr-only">(current)</span></a>
          </li>
          <li>
            <a href="/new-post">New Post</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
