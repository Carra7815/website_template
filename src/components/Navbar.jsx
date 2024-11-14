import { Link } from "react-router-dom";

import Navmenu from "./Navmenu";
import ToggleTheme from "./ToggleTheme";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 dark:bg-teal-900">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-white">
          my organization
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/about" className="nav-item">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-item">
              Projects
            </Link>
          </li>
          <li className="flex">
            <Navmenu />
          </li>
          <li className="flex">
            <ToggleTheme />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
