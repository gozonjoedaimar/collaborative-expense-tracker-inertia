import React from "react";
import NavLinks from "./NavLinks";

export default function Navigation({ children }) {

  function getNavLinks(children) {
    if (typeof children === 'object') {
      return children
    }
    else {
      return <NavLinks
        menu="Menu"
        items={[
          // ["Dashboard", "/", 1],
          ["+Income", "/add/income", 2],
          ["+Expense", "/add/expense", 3],
        ]}
      />
    }
  }

  return (
    <nav className="flex justify-between p-3 bg-blue-500 shadow-md text-white">
      <div className="app-name">Collaborative Expense Tracker</div>
      {getNavLinks(children)}
    </nav>
  );
}