import React, { ReactNode } from "react";
import NavLinks from "./NavLinks";
import { BsCashCoin } from "react-icons/bs";
import { RiHandCoinFill } from "react-icons/ri";
import { ImExit } from "react-icons/im";

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
        menuName="Menu"
        items={[
          [<><BsCashCoin className="inline mr-2" />Income</>, "/add/income", 1],
          [<><RiHandCoinFill className="inline mr-2" />Expense</>, "/add/expense", 2],
          [<><ImExit className="inline mr-2" />Logout</>, "/logout", 3, 'post'],
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