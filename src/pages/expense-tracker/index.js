import { useAddTransaction } from "../../hooks/useAddTransaction"

function ExpenseTracker() {
  const addTransaction = useAddTransaction()
  function addExpense(){
      addTransaction({description: "this is my tansaction", transactionAmount: 1.99, transactionType:"expense"})
  }
  return (
    <>
    <div>Expense tracker page</div>
    <button onSubmit={addExpense}> add transaction</button>      
    </>
  )
}

export default ExpenseTracker