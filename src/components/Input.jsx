export default function Input({ label, type = "text", value, onChange,name }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={onChange}
      />
    </div>
  );
}