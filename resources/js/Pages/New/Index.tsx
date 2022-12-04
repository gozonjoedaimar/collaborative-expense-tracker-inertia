import React, { ChangeEvent, FormEvent, useState }  from "react";
import { DistractFreeLayout as Layout } from "../../Shared/Layout";
import { Head, useForm } from "@inertiajs/inertia-react";

type IndexProps = {
  type: string
}

const Index = ({ type }:IndexProps) => {

  const [submitting, setSubmitting] = useState(false);

  const {data, setData, errors, post} = useForm({
    amount: 0
  });

  const handleSubmit = (event:FormEvent) => {
    event.preventDefault();

    post(`/add/${type}`, {
      onFinish: () => setSubmitting(false)
    });
  }

  const handleSubmitButton = () => {
    setSubmitting(true);
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
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col" disabled={submitting}>
          <div className="flex flex-col">
            <label>
              Amount:
              <input type="text" name="amount" onChange={handleChange} className={inputClass} />
            </label>
            { errors.amount && <small className="text-red-600">{errors.amount}</small> }
          </div>
          <button type="submit" onClick={handleSubmitButton}>Add</button>
        </fieldset>
      </form>
    </Layout>
  )
}

export default Index;