import React, { ReactNode } from "react";
import NavLinks from "./NavLinks";

type NavigationProps = {
  children?: ReactNode;
  className?: string;
}

export default function Navigation({ children, className }:NavigationProps) {

  function getNavLinks(children: ReactNode) {
    if (typeof children === 'object') {
      return children
    }
    else {
      return <NavLinks
        menu="Menu"
        items={[
          ["+Income", "/add/income", 1],
          ["+Expense", "/add/expense", 2],
        ]}
      />
    }
  }

  return (
    <nav className={`flex justify-between p-3 bg-blue-500 shadow-md text-white ${className}`}>
      <div className="app-name">Collaborative Expense Tracker</div>
      {getNavLinks(children)}
    </nav>
  );
}