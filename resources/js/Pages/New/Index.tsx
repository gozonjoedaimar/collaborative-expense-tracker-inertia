import React, { ChangeEvent, FormEvent }  from "react";
import { DistractFreeLayout as Layout } from "../../Shared/Layout";
import { Head, useForm } from "@inertiajs/inertia-react";

type IndexProps = {
  type: string
}

const Index = ({ type }:IndexProps) => {

  const {data, setData, errors, post} = useForm({
    amount: 0
  });

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();

    post(`/add/${type}`);
  }

  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    setData({
      ...data,
      [key]: value
    })
  }

  const inputClass = 'border-b border-gray-600 align-text-bottom focus-visible:outline-none focus-visible:border-b-blue-600 focus-visible:border-b-2';

  return (
    <Layout>
      <Head title="Add" />
      <form onSubmit={handleSubmit} className="flex flex-col">
        <fieldset className="flex flex-col">
          <label>
            Amount:
            <input type="text" name="amount" onChange={handleChange} className={inputClass} />
          </label>
          { errors.amount && <small className="text-red-600">{errors.amount}</small> }
        </fieldset>
      </form>
    </Layout>
  )
}

export default Index;