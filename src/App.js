import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

const App = () => {
   const [ currency, setCurrency ] = useState('')
   const handleCurrencyChange = (currency)=>{
    setCurrency(currency)
   }
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <Budget onChange={handleCurrencyChange}/>
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget currency={currency}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal currency={currency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList currency={currency}/>
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm currency={currency}/>
                    </div>
                </div>
                
            </div>
        </AppProvider>
    );
};

export default App;