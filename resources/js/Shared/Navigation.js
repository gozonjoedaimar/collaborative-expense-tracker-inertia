import React from "react";
import { Link, usePage } from "@inertiajs/inertia-react";

export default function Navigation() {
  const {active_route} = usePage().props;
  return (
    <nav className="bg-amber-300 text-black flex justify-between p-3">
      <div className="">Collaborative Expense Tracker</div>
      <ul className="flex space-x-2 underline">
        {[
          { name: 'Dashboard', href: "/", key: 1 },
          { name: 'Income', href: "/add/income", key: 2 },
          { name: 'Expense', href: "/add/expense", key: 3 },
        ].map((item) => {
          return <li key={item.key}><Link href={item.href} className={`nav-link-item ${active_route === item.href ? "font-bold" : "" }`}>{item.name}</Link></li>;
        })}
      </ul>
    </nav>
  )
}