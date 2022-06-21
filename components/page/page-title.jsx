export default function PageTitle({ title, subtitle, className }) {
  if (!title) {
    return null;
  }

  return <div className={`flex ${className}`}>
    <div>
        <div>{ title }</div>
        <div>{ subtitle }</div>
    </div>
  </div>;
}
