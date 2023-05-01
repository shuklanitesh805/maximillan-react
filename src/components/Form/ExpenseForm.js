import './NewExpenseForm.css';
import './ExpenseForm.css'
export const ExpenseForm = () =>{
    return ( 
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"></input>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01"></input>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2022-01-01" max="2023-12-31"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button>Add Expense</button>
        </div>
    </form>);
}