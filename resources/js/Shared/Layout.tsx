import { Link, usePage } from "@inertiajs/inertia-react";
import React, { ReactNode, useEffect } from "react";
import { toast, ToastContainer, TypeOptions } from "react-toastify";
import Navigation from "./Navigation";
import 'react-toastify/dist/ReactToastify.css';
import { ErrorBag, Errors, Page, PageProps } from "@inertiajs/inertia";

declare global {
  interface pagePropsInterface extends Page<PageProps> {
    props: {
      errors: Errors & ErrorBag
      flash: {
        notification: {
          message: string;
          type: TypeOptions;
        }
      }
    }
  }
}

type LayoutProps = {
  className?: string;
  children: ReactNode;
}

const Config = ({className, children}:LayoutProps) => {

  const { flash } = usePage<pagePropsInterface>().props;

  useEffect(function() {
    if (flash.notification) {
      toast(flash.notification.message, { type: flash.notification.type || 'default' });
    }
  }, [ flash.notification ])

  return (
    <div className={className}>
      {children}
      <ToastContainer position="bottom-right" />
    </div>
  )
};

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
      <Navigation>
        <div className="hidden">empty</div>
      </Navigation>
      <div className="content p-5">{children}</div>
    </Config>
  )
}

export function AuthLayout({ children }:LayoutProps) {
  return (
    <Config className="auth-layout">
      <Navigation>
        <Link href="/logout" method="post" className="" as="button" type="button">Logout</Link>
      </Navigation>
      <div className="content p-5">{children}</div>
    </Config>
  )
}