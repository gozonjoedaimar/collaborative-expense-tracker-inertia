import { Link } from '@inertiajs/inertia-react';
import React from 'react'

export default function ErrorPage({ status }:{ status: string; }) {

  let title = {
    503: 'Service Unavailable',
    500: 'Server Error',
    404: 'Page Not Found',
    403: 'Forbidden',
  }[status]

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.',
  }[status]

  return (
    <section className="bg-primary relative z-10 py-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2
                className="mb-2 text-[50px] font-bold leading-none text-slate-500 sm:text-[80px] md:text-[100px]"
              >
                {status}
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-slate-500">
                {title}
              </h4>
              <p className="mb-8 text-lg text-slate-500">
                {description}
              </p>
              <Link
                href="/dashboard"
                className="hover:text-primary inline-block rounded-lg border border-white px-8 py-3 text-center text-base font-semibold text-slate-500 transition hover:bg-white"
              >
                Go To Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 left-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14"
      >
        <div
          className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
        ></div>
        <div className="flex h-full w-1/3">
          <div
            className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
          ></div>
          <div
            className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"
          ></div>
        </div>
        <div
          className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"
        ></div>
      </div>
    </section>
  )
}