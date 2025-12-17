export default function DashboardPage() {
  const columns = ['Applied', 'Interview', 'Offer', 'Rejected'];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        Job Application Tracker
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {columns.map((col) => (
          <div key={col} className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">{col}</h2>

            <div className="space-y-2">
              <div className="p-2 border rounded text-sm">
                Empresa ejemplo
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
