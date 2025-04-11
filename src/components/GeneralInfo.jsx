import FormInput from "./FormInput";

function GeneralInfo({ generalInfo, handleChange }) {
  return (
    <fieldset className="general-info">
      <legend>General Info:</legend>

      <FormInput
        label="First name:"
        type="text"
        className="first-name"
        name="firstName"
        value={generalInfo.firstName}
        onChange={handleChange}
      />

      <FormInput
        label="Last name:"
        type="text"
        className="last-name"
        name="lastName"
        value={generalInfo.lastName}
        onChange={handleChange}
      />

      <FormInput
        label="Email:"
        type="email"
        className="email"
        name="email"
        value={generalInfo.email}
        onChange={handleChange}
      />

      <FormInput
        label="Phone:"
        type="tel"
        className="tel"
        name="phone"
        value={generalInfo.phone}
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default GeneralInfo;
