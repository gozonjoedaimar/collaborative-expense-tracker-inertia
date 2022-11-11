import React from "react";
import Navigation from "./Navigation.js";

export function SummaryLayout({ children }) {
  return (
    <div className="summary-layout bg-slate-500 text-white">
      <Navigation />
      <div>{children}</div>
    </div>
  );
}

export function DistractFreeLayout({ children }) {
  return (
    <div className="distract-free-layout bg-red-300">
      <Navigation />
      <div>{children}</div>
    </div>
  );
}