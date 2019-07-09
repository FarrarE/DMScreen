import React, { useState } from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
} from 'reactstrap';

const Header = () => {

  return (
    <Navbar>
      <NavbarBrand>
        <span className="header">DMScreen</span>
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;