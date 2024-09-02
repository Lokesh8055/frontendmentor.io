import ExpenseChart from './ExpenseChart';
import ExpenseTotal from './ExpenseTotal';
import './Expense.css';
import Card from '../Card';

const Expenses = () => {
  return (
    <Card className="expenses">
      <h2>Spending - Last 7 days</h2>
      <ExpenseChart />
      <hr className="divider" />
      <ExpenseTotal />
    </Card>
  );
};

export default Expenses;
