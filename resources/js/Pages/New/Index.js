import { Head } from "@inertiajs/inertia-react";
import { React } from "react";
import { DistractFreeLayout as Layout } from "../../Shared/Layout.js";

export default function Index({ types }) {
  return (
    <Layout>
      <Head title="Add" />
      <p>Add {JSON.stringify(types)}</p>
    </Layout>
  )
}