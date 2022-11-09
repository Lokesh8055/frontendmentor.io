import React from 'react'
import ExpenseChart from './ExpenseChart'
import ExpenseTotal from './ExpenseTotal'
import './Expense.css'
import Card from '../UI/Card'

const Expenses = () => {
 
  return (
    <Card className='expenses'>
      <h2>Spending - Last 7 days</h2>
      <ExpenseChart />
      <ExpenseTotal />
    </Card>
  )
}

export default Expenses