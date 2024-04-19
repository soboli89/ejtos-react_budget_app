import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = ({currency}) => {
    const { expenses, budget, } = useContext(AppContext);
   //console.log("REMAIN"+currency);
  // console.log("REMAIN"+budget);
 //  console.log("REMAIN"+item);
    const totalExpenses = expenses.reduce((total, item) => {
        console.log(item);
        return (total = total + item.cost);
        
   
    }, 0);
    //console.log("budgetrem"+budget);
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {currency} {budget - totalExpenses}</span>
        </div>
    );
};
export default Remaining;
