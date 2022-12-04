import React from 'react'
import { Head } from '@inertiajs/inertia-react'
import { toast } from 'react-toastify';
import { DashboardLayout as Layout } from "../../Shared/Layout";
import { Inertia } from '@inertiajs/inertia';

interface IndexProps {
  message: string;
  summary: {
    description: string;
    color: string;
    amount: number;
    created_at: string;

  }[]
}

function showToast () {
  toast.success("Hey");
  Inertia.visit('/no-where');
}

const Index = function({ message, summary }:IndexProps) {
  const cellClass = 'border-t border-b p-2 border-slate-300';
  const amountColors:{[key:string]: string} = {
    green: "text-green-400",
    red: "text-red-400"
  }
  const amountClass = (color:string) => [cellClass, (amountColors[color])].join(' ');
  const timeClass = [cellClass, 'text-gray-500'].join(' ');
  return (
    <Layout>
      <Head title='Dashboard' />
      <p onClick={showToast}>{message}, welcome to this app!</p>
      <table className='table-auto w-full border-collapse'>
        <thead>
          <tr className='bg-slate-200'>
            <td className={cellClass}>Description</td>
            <td className={cellClass}>Amount</td>
            <td className={cellClass}>Date Added</td>
          </tr>
        </thead>
        <tbody>
        {
          summary.map( (row, key) => {
            return (
              <tr key={key}>
                <td className={cellClass}>{row.description}</td>
                <td className={amountClass(row.color)}>{row.amount}</td>
                <td className={timeClass}>{row.created_at}</td>
              </tr> 
            )
          })
        }
        </tbody>
      </table>
    </Layout>
  )
}

export default Index;