import React from 'react'
import { Head } from '@inertiajs/inertia-react'

export default function Index({ message }) {
  return (
    <>
      <Head title="Family Expense Tracker" />
      <h1 className='text-3xl'>Family Expense Tracker</h1>
      <p>{message}, welcome to this app!</p>
    </>
  )
}