export default function Pricing() {
  return (
    <div>
      <h2>Membership Plans</h2>
      <ul>
        <li><strong>Free</strong>: Basic access</li>
        <li><strong>Premium</strong>: $20 – more AI & AP content</li>
        <li><strong>Expert</strong>: $50 – all features unlocked</li>
      </ul>
      <h3>Scholarship Code</h3>
      <input placeholder='Enter scholarship code' />
      <h3>Gift a Membership</h3>
      <input placeholder='Recipient email' /><button>Send Gift</button>
    </div>
  );
}