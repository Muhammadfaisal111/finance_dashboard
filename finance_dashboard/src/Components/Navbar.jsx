export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Finance Dashboard</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </nav>
  );
}
