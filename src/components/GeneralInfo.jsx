import { useState } from "react";
import FormInput from "./FormInput";

function GeneralInfo({
  person,
  handleFirstNameChange,
  handleLastNameChange,
  handleEmailChange,
  handlePhoneNumberChange,
}) {
  const [isActive, setIsActive] = useState(true);

  function handleDone() {
    setIsActive(false);
  }

  function handleEdit() {
    setIsActive(true);
  }

  return (
    <div className="general-info">
      <form>
        <fieldset>
          <legend>General Info:</legend>
          {isActive ? (
            <>
              <FormInput
                label="First name:"
                type="text"
                className="first-name"
                value={person.firstName}
                onChange={handleFirstNameChange}
              />

              <FormInput
                label="Last name:"
                type="text"
                className="last-name"
                value={person.lastName}
                onChange={handleLastNameChange}
              />

              <FormInput
                label="Email:"
                type="email"
                className="email"
                value={person.email}
                onChange={handleEmailChange}
              />

              <FormInput
                label="Phone number:"
                type="tel"
                className="tel"
                value={person.phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <div className="form-control btn-group">
                <button
                  type="button"
                  className="btn btn-done"
                  onClick={handleDone}
                >
                  Done
                </button>
                <button type="reset">Reset</button>
              </div>
            </>
          ) : (
            <button className="btn btn-edit" onClick={handleEdit}>
              Edit
            </button>
          )}
        </fieldset>
      </form>
    </div>
  );
}

export default GeneralInfo;
