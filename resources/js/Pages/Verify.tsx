import React from "react";
import { AuthLayout as Layout } from "../Shared/Layout";
import { Head, Link } from "@inertiajs/inertia-react";

const Verify = () => (
  <Layout className="m-5">
    <Head title="Verify Email" />
      <p>Please verify your email.</p>
      <p><Link href="/email/verification-notification" method="post" as="button" type="button" className="text-blue-600">Resend verification?</Link></p>
  </Layout>
)

export default Verify;