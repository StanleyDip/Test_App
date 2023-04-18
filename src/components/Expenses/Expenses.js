import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses (props){
 return(
    <Card className="expenses">
{props.items.map((item) => (
  <ExpenseItem
    key={item.id} // Don't forget to add a unique key prop
    title={item.title}
    amount={item.amount}
    date={item.date}
  />
))}
    </Card>
 );
}
export default Expenses;