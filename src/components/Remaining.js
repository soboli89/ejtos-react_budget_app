import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { expenses, budget, currency} = useContext(AppContext);
   // console.log(currency);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
   
    }, 0);
    //console.log("budgetrem"+budget);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: currency{budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
