import React, { ChangeEvent, FormEvent}  from "react";
import { SessionLayout as Layout } from "../Shared/Layout";
import { Head, useForm } from "@inertiajs/inertia-react";
import { toast } from "react-toastify";
import { Inertia } from "@inertiajs/inertia";

const Register = () => {

  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    name: "",
    confirm_password: ""
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    post('/register', {
      onSuccess: () => {
        reset();
        toast.success("User registered. Redirecting to login.", {
          onClose: () => Inertia.visit('/login')
        });
      }
    });
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    let key = event.target.name;
    let value = event.target.value;

    setData({
      ...data,
      [key]: value
    });
  }

  const inputClass = 'border-b border-gray-600 align-text-bottom focus-visible:outline-none focus-visible:border-b-blue-600 focus-visible:border-b-2';

  return (
    <>
      <Head title="Register" />
      <form onSubmit={handleSubmit} className="flex flex-col p-5 m-3 border border-gray-300 sm:w-1/2 sm:mx-auto">
        <fieldset disabled={processing}>
          <div className="flex flex-col space-y-3">
            <label className="flex justify-between">
              Name:
              <input type='text' name="name" value={data.name} onChange={handleChange} className={inputClass} />
            </label>
            { errors.name && <small className="text-red-600">{ errors.name }</small> }
            <label className="flex justify-between">
              Email:
              <input type='email' name="email" value={data.email} onChange={handleChange} className={inputClass} />
            </label>
            { errors.email && <small className="text-red-600">{ errors.email }</small> }
            <label className="flex justify-between">
              Password:
              <input type='password' name="password" value={data.password} onChange={handleChange} className={inputClass} />
            </label>
            { errors.password && <small className="text-red-600">{ errors.password }</small> }
            <label className="flex justify-between">
              Confirm password:
              <input type='password' name="confirm_password" value={data.confirm_password} onChange={handleChange} className={inputClass} />
            </label>
            { errors.confirm_password && <small className="text-red-600">{ errors.confirm_password }</small> }
          </div>
        </fieldset>
        <button type="submit" className="rounded py-2 mt-5 bg-blue-500 text-white">Register</button>
      </form>
    </>
  )
}

Register.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;

export default Register;