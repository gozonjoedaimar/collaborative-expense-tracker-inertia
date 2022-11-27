import React, { ChangeEvent, FormEvent, useEffect, useState }  from "react";
import { SessionLayout as Layout } from "../Shared/Layout";
import { Head, Link, useForm } from "@inertiajs/inertia-react";

const Login = () => {

  const {data, setData, post, errors} = useForm({
    email: "",
    password: ""
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    post('/login');
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let key = event.target.name;
    let value = event.target.value;

    setData({
      ...data,
      [key]: value
    })
  }

  const inputClass = 'border-b border-gray-600 align-text-bottom focus-visible:outline-none focus-visible:border-b-blue-600 focus-visible:border-b-2';

  return (
    <Layout>
      <Head title="Login" />
      <form onSubmit={handleSubmit} className="flex flex-col p-5 m-3 border border-gray-300 sm:mx-auto sm:max-w-[400px]">
        <div className="flex flex-col space-y-3">
          <label className="flex justify-between">
            Email:
            <input value={data.email} name="email" type="email" onChange={handleChange} className={inputClass} />
          </label>
          { errors.email && <small className="text-red-600">{ errors.email }</small> }
          <label className="flex justify-between">
            Password:
            <input value={data.password} name="password" type="password" onChange={handleChange} className={inputClass} />
          </label>
          { errors.password && <small className="text-red-600">{ errors.password }</small> }
        </div>
        <button type="submit" className="rounded py-2 mt-5 bg-blue-500 text-white">Login</button>
      </form>
      <p className="text-gray-800">
        <small>Don't have an account? <Link href="/register" className="text-blue-600">Register</Link></small>
      </p>
    </Layout>
  )

}

export default Login;