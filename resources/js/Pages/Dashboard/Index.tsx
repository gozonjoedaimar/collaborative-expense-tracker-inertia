import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { toast } from 'react-toastify';
import { DashboardLayout as Layout } from "../../Shared/Layout";

type IndexProps = {
  message: string;
}

function showToast () {
  toast.success("Hey");
}

export default function Index({ message }:IndexProps) {
  return (
    <Layout>
      <Head title='Dashboard' />
      <p onClick={showToast}>{message}, welcome to this app!</p>
    </Layout>
  )
}