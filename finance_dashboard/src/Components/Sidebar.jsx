export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 shadow-md p-4">
      <ul className="space-y-4">
        <li className="font-medium hover:text-blue-600 cursor-pointer">
          Dashboard
        </li>
        <li className="font-medium hover:text-blue-600 cursor-pointer">
          Transactions
        </li>
        <li className="font-medium hover:text-blue-600 cursor-pointer">
          Analytics
        </li>
        <li className="font-medium hover:text-blue-600 cursor-pointer">
          Settings
        </li>
      </ul>
    </aside>
  );
}
