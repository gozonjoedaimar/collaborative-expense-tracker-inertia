import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function NavLinks({ menu, items }) {
  const {active_route} = usePage().props;
  const [nav, setNav] = useState({ show: false });

  const toggleNav = function() {
    setNav({...nav, show: !nav.show});
  };
  return  (
    <>
      <button onClick={toggleNav} className="sm:hidden">{menu}</button>
      <div className={`bg-red-500 absolute h-full w-full -m-3 flex flex-col justify-center
        ${ nav.show ? "": "hidden" }
        sm:static sm:flex sm:flex-row sm:h-auto sm:w-auto sm:m-0 sm:bg-transparent
        `.cn()}>
        <button onClick={toggleNav} className="absolute right-2 top-2 sm:hidden">Close</button>
        <ul className="w-1/2 mx-auto space-y-5 text-center underline sm:w-auto sm:flex sm:space-x-2 sm:space-y-0">
          {items.map(([text, href, key]) => {
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
    </>
  )
}