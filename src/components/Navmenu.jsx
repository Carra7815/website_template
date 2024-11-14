import React from "react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Section, Header } from "react-aria-components";

function Navmenu() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" preventFocusOnPress>
        <Bars3Icon className="nav-item h-6 w-6" />
      </Button>
      <Popover>
        <Menu className="w-64 rounded bg-white p-1 pb-3 dark:bg-gray-800">
          <Section>
            <Header className="navmenu-header">Us</Header>
            <MenuItem className="navmenu-item" href="/support">
              Support
            </MenuItem>
            <MenuItem className="navmenu-item" href="/contact">
              Contact
            </MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default Navmenu;
