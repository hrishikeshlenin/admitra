export default function Admin() {
  const visits = 1234;
  const income = 3200;
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Total Visits: {visits}</p>
      <p>Income from Plans: ${income}</p>
      <p>Scholarship Codes Issued: 24</p>
    </div>
  );
}