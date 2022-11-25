import { Link } from "@inertiajs/inertia-react";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import Navigation from "./Navigation";
import 'react-toastify/dist/ReactToastify.css';

type LayoutProps = {
  className?: string;
  children: ReactNode;
}

const Config = ({className, children}:LayoutProps) => (
  <div className={className}>
    {children}
    <ToastContainer />
  </div>
);

export function DashboardLayout({ children }:LayoutProps) {
  return (
    <Config className="dashboard-layout">
      <Navigation />
      <div className="content p-5">{children}</div>
    </Config>
  );
}

export function DistractFreeLayout({ children }:LayoutProps) {
  return (
    <Config className="distract-free-layout">
      <Navigation>
        <Link href="/" className="" as="button" type="button">Cancel</Link>
      </Navigation>
      <div className="content p-5">{children}</div>
    </Config>
  );
}

export function SessionLayout({ children }:LayoutProps) {
  return (
    <Config className="session-layout">
      { children }
    </Config>
  )
}