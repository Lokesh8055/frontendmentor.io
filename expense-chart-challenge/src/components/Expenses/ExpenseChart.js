import React from 'react'
import { Bar } from 'react-chartjs-2'
import { data, options } from '../../chart'

const ExpenseChart = () => {
  return (
    <div className='expenses__chart'>
        <Bar data={data} options={options} />
    </div>
  )
}

export default ExpenseChart