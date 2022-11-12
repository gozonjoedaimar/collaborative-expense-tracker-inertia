import React from "react";
import NavLinks from "./NavLinks";

export default function Navigation() {
  return (
    <nav className="bg-amber-300 text-black flex justify-between p-3">
      <div className="app-name">Collaborative Expense Tracker</div>
      <NavLinks
        menu="Menu"
        items={[
          ["Dashboard", "/", 1],
          ["Income", "/add/income", 2],
          ["Expense", "/add/expense", 3],
        ]}
      />
    </nav>
  );
}