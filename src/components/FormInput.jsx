function FormInput({ label, type, className, name, value, onChange }) {
  return (
    <div className="form-control">
      <label>{label} </label>
      <input
        type={type}
        className={className}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
