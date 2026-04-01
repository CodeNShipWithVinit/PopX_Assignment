export default function Button({ text, onClick, variant = "primary" }) {
  return (
    <button
      className={`btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}