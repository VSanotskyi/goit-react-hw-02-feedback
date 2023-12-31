export default function Section({ title, children }) {
  return (
    <div>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
