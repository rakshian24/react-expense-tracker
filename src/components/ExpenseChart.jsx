import React from 'react'
import { MONTHS } from '../constant'
import Bar from './Bar'

const ExpenseChart = () => {

    return (
        <div className="expense-chart">
           {MONTHS.map((month, index) => <Bar key={index} label={month} fill={0}/>)}
        </div>
    )
}

export default ExpenseChart
