import React, { ChangeEvent, FormEvent, useState }  from "react";
import { SessionLayout as Layout } from "../Shared/Layout";
import { Head, usePage } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

const Login = () => {

  const { errors } = usePage().props;

  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    Inertia.post('/login', values);
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let key = event.target.name;
    let value = event.target.value;

    setValues({
      ...values,
      [key]: value
    })
  }

  const inputClass = 'border-b border-gray-600 align-text-bottom focus-visible:outline-none focus-visible:border-b-blue-600 focus-visible:border-b-2';

  return (
    <>
      <Head title="Login" />
      <form onSubmit={handleSubmit} className="flex flex-col p-5 m-3 border border-gray-300 sm:w-1/2 sm:mx-auto">
        <div className="flex flex-col space-y-3">
          <label className="flex justify-between">
            Email:
            <input value={values.email} name="email" type="email" onChange={handleChange} className={inputClass} />
          </label>
          { errors.email && <small className="text-red-600">{ errors.email }</small> }
          <label className="flex justify-between">
            Password:
            <input value={values.password} name="password" type="password" onChange={handleChange} className={inputClass} />
          </label>
          { errors.password && <small className="text-red-600">{ errors.password }</small> }
        </div>
        <button type="submit" className="rounded py-2 mt-5 bg-blue-500 text-white">Login</button>
      </form>
    </>
  )

}

Login.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Login;