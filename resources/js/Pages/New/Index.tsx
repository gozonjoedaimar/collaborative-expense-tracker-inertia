import React  from "react";
import { DistractFreeLayout as Layout } from "../../Shared/Layout";
import { Head } from "@inertiajs/inertia-react";

type IndexProps = {
  types: string[]
}

const Index = ({ types }:IndexProps) => (
  <>
    <Head title="Add" />
    <p>Add {JSON.stringify(types)}</p>
  </>
)

Index.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Index;