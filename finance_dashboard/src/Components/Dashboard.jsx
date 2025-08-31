import { useState, useEffect } from "react";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    const savedTransactions = localStorage.getItem("transactions");
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  useEffect(() => {
    if (transactions.length >= 0) {
      localStorage.setItem("transactions", JSON.stringify(transactions));
    }
  }, [transactions]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (index) => {
    const newTransactions = transactions.filter((_, i) => i !== index);
    setTransactions(newTransactions);
  };

  const editTransaction = (index) => {
    setEditingIndex(index);
  };

  const updateTransaction = (updatedTransaction) => {
    const updatedList = transactions.map((t, i) =>
      i === editingIndex ? updatedTransaction : t
    );
    setTransactions(updatedList);
    setEditingIndex(null);
  };

  // Filter transactions based on search and category
  const filteredTransactions = transactions.filter((t) => {
    return (
      t.description.toLowerCase().includes(searchText.toLowerCase()) &&
      (filterCategory === "" || t.category === filterCategory)
    );
  });

  // Get unique categories for dropdown
  const categories = [...new Set(transactions.map((t) => t.category))];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Overview</h2>

      {/* Form */}
      <TransactionForm
        addTransaction={addTransaction}
        editingTransaction={
          editingIndex !== null ? transactions[editingIndex] : null
        }
        updateTransaction={updateTransaction}
      />

      {/* Search & Filter */}
      <div className="flex gap-4 my-4">
        <input
          type="text"
          placeholder="Search by description..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <TransactionTable
        transactions={filteredTransactions}
        deleteTransaction={deleteTransaction}
        editTransaction={editTransaction}
      />
    </div>
  );
}
