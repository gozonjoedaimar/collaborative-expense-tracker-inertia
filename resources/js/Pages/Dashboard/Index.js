import React from 'react'
import { SummaryLayout as Layout } from "../../Shared/Layout.js";
import { Head } from '@inertiajs/inertia-react'

export default function Index({ message }) {
  return (
    <Layout>
      <Head title='Dashboard' />
      <p>{message}, welcome to this app!</p>
    </Layout>
  )
}