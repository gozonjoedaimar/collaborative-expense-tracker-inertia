import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Navigation from "./Navigation.js";

export function SummaryLayout({ children }) {
  return (
    <div className="summary-layout">
      <Navigation />
      <div className="content p-5">{children}</div>
    </div>
  );
}

export function DistractFreeLayout({ children }) {
  return (
    <div className="distract-free-layout">
      <Navigation>
        <Link href="/" className="" as="button" type="button">Cancel</Link>
      </Navigation>
      <div className="content p-5">{children}</div>
    </div>
  );
}