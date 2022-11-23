import React from 'react'
import { SummaryLayout as Layout } from "../../Shared/Layout";
import { Head } from '@inertiajs/inertia-react'

type IndexProps = {
  message: string;
}

export default function Index({ message }:IndexProps) {
  return (
    <Layout>
      <Head title='Dashboard' />
      <p>{message}, welcome to this app!</p>
    </Layout>
  )
}