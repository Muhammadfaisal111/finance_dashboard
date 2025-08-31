import { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>

      {/* Form */}
      <TransactionForm addTransaction={addTransaction} />

      {/* Table */}
      <TransactionTable transactions={transactions} />
    </div>
  );
}
