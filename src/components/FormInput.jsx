function FormInput({ label, type, className, value, onChange }) {
  return (
    <div className="form-control">
      <label>{label} </label>
      <input
        type={type}
        className={className}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
