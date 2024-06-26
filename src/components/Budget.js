
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = ({onChange}) => {
    const { budget, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
   // const [newCurrency, setCurrency] = useState(currency);
    //console.log("budget" + currency);
    const handleCurrencyChange=(event) =>{
        onChange(event.target.value)
    }
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    };
      return (
            
<div className='alert alert-secondary'>
<span>Budget: {currency} {budget}</span>
<select className="custom-select alert alert-success" id="inputCurrencySelect01" onChange={handleCurrencyChange}>
                        <option defaultValue>Currency</option>
                        <option className="alert alert-success" value="$" currency="Dollar"> $ Dollar</option>
                        <option className="alert alert-success" value="£" currency="Pound">£ Pound</option>
                        <option className="alert alert-success" value="€" currency="Euro" background-color="green">€ Euro</option>
                        <option className="alert alert-success" value="₹" currency="Ruppee">₹ Ruppee</option>
                  </select>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;