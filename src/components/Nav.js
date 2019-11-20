import React from "react";
import { NavLink } from "react-router-dom";
import LogOutButton from "../components/LogOutButton"

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="add" activeClassName="active">
            Ask Question
          </NavLink>
        </li>
        <li>
          <NavLink to="leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </li>
      </ul>
      <LogOutButton />
    </nav>
  );
}
