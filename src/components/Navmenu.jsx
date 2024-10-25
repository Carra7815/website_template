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
      <Button aria-label="Menu" className="outline-none">
        <Bars3Icon className="h-6 w-6 text-black" />
      </Button>
      <Popover>
        <Menu className="w-64 rounded bg-slate-950 p-1 text-slate-200 outline outline-1 outline-white">
          <Section className="focus:bg-slate-500">
            <Header className="pl-4 font-bold">Us</Header>
            <MenuItem
              className="cursor-pointer rounded-md pl-5 outline-none hover:bg-violet-800"
              onAction={() => alert("open")}
            >
              Support
            </MenuItem>
            <MenuItem
              className="cursor-pointer rounded-md pl-5 outline-none hover:bg-violet-800"
              onAction={() => alert("rename")}
            >
              Contact
            </MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default Navmenu;