import './NewExpenseForm.css';
import './ExpenseForm.css'
import { useState } from 'react';
export const ExpenseForm = () => {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredTitle: event.target.value,
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        });
    }

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
           return {
             ...prevState,
            enteredDate: event.target.value
           };
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        const expenseData = userInput;
        console.log(expenseData);
    }
    return ( 
    <form onSubmit={handleSubmit}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Add Expense</button>
        </div>
    </form>);
}