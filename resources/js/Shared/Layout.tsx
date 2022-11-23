import { Link } from "@inertiajs/inertia-react";
import React, { ReactNode } from "react";
import Navigation from "./Navigation";

type LayoutProps = {
  children: ReactNode;
}

export function SummaryLayout({ children }:LayoutProps) {
  return (
    <div className="summary-layout">
      <Navigation />
      <div className="content p-5">{children}</div>
    </div>
  );
}

export function DistractFreeLayout({ children }:LayoutProps) {
  return (
    <div className="distract-free-layout">
      <Navigation className="text-red-600">
        <Link href="/" className="" as="button" type="button">Cancel</Link>
      </Navigation>
      <div className="content p-5">{children}</div>
    </div>
  );
}