import React  from "react";
import { DistractFreeLayout as Layout } from "../../Shared/Layout";
import { Head } from "@inertiajs/inertia-react";

type IndexProps = {
  types: string[]
}

export default function Index({ types }:IndexProps) {
  return (
    <Layout>
      <Head title="Add" />
      <p>Add {JSON.stringify(types)}</p>
    </Layout>
  )
}