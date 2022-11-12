import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function Navigation() {
  const {active_route} = usePage().props;
  const [nav, setNav] = useState({ show: false });

  const toggleNav = function() {
    setNav({...nav, show: !nav.show});
  };

  return (
    <nav className="bg-amber-300 text-black flex justify-between p-3">
      <div className="app-name">Collaborative Expense Tracker</div>
      <button onClick={toggleNav} className="sm:hidden">Menu</button>
      <div className={`bg-red-500 absolute h-full w-full -m-3 flex flex-col justify-center
        ${ nav.show ? "": "hidden" }
        sm:static sm:flex sm:flex-row sm:h-auto sm:w-auto sm:m-0
        `.cn()}>
        <button onClick={toggleNav} className="absolute right-2 top-2 sm:hidden">Close</button>
        <ul className="w-1/2 mx-auto text-center underline sm:w-auto sm:flex sm:space-x-2">
          {[
            ["Dashboard", "/", 1],
            ["Income", "/add/income", 2],
            ["Expense", "/add/expense", 3],
          ].map(([text, href, key]) => {
            return (
              <li key={key}>
                <Link
                  href={href}
                  className={`
                    nav-link-item
                    some-class-item
                    ${active_route === href ? "font-bold": ""}
                  `.cn()}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}