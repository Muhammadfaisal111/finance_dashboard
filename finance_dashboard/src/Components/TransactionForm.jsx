import { useState, useEffect } from "react";

export default function TransactionForm({
  addTransaction,
  editingTransaction,
  updateTransaction,
}) {
  const [form, setForm] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
  });

  // If editing, fill the form with existing values
  useEffect(() => {
    if (editingTransaction !== null) {
      setForm(editingTransaction);
    }
  }, [editingTransaction]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.description || !form.amount || !form.category || !form.date)
      return;

    if (editingTransaction) {
      updateTransaction(form);
    } else {
      addTransaction(form);
    }
    setForm({ description: "", amount: "", category: "", date: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md p-4 rounded-lg space-y-4"
    >
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={form.amount}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">
        {editingTransaction ? "Update Transaction" : "Add Transaction"}
      </button>
    </form>
  );
}
