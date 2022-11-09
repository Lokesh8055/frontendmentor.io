import React from 'react'
import { sumAmount } from '../../chart'
const ExpenseTotal = (props) => {
  return (
    <div className='expenses__total'>
        <div className='expenses__price'>
            <h3>Total this month</h3>
            <p>${sumAmount}</p>
        </div>
        <div>
            <p className='expenses__percent'>+2.4%</p>
            <p className='expenses__month'>from last month</p>
        </div>
    </div>
  )
}

export default ExpenseTotal