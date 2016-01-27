import React from 'react';
import * as B from 'react-bootstrap';

const Navigation = () => (
  <div>
    <B.Navbar>
      <B.Navbar.Header>
        <B.Navbar.Toggle/>
        <B.Navbar.Brand>
          Mantra Voice
        </B.Navbar.Brand>
      </B.Navbar.Header>

      <B.Navbar.Collapse>
        <B.Nav>
          <B.NavItem href="/">Home</B.NavItem>
          <B.NavItem href="/new-post">New Post</B.NavItem>
        </B.Nav>
      </B.Navbar.Collapse>
    </B.Navbar>
  </div>
);

export default Navigation;
