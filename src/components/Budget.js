
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [currency, setCurrency] = useState('');
    //console.log(newBudget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
            
<div className='alert alert-secondary'>
<span>Budget: {currency} {budget}</span>
<select className="custom-select" id="inputCurrencySelect01" onChange={(event) => setCurrency(event.target.value)}>
                        <option defaultValue>Currency</option>
                        <option value="$" currency="Dollar"> $ Dollar</option>
                        <option value="£" currency="Pound">£ Pound</option>
                        <option value="€" currency="Euro">€ Euro</option>
                        <option value="₹" currency="Ruppee">₹ Ruppee</option>
                  </select>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};

export default Budget;