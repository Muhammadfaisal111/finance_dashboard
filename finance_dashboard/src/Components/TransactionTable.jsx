export default function TransactionTable({ transactions }) {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mt-6">
      <h3 className="text-lg font-semibold mb-4">Transactions</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Description</th>
            <th className="p-2 border">Amount</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, index) => (
            <tr key={index} className="text-center">
              <td className="p-2 border">{t.description}</td>
              <td className="p-2 border">${t.amount}</td>
              <td className="p-2 border">{t.category}</td>
              <td className="p-2 border">{t.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
