import { useState } from "react";
import FormInput from "./FormInput";

function GeneralInfo() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleFirstNameChange = (event) => {
    setPerson({ ...person, firstName: event.target.value });
  };

  const handleLastNameChange = (event) => {
    setPerson({ ...person, lastName: event.target.value });
  };

  const handleEmailChange = (event) => {
    setPerson({ ...person, email: event.target.value });
  };

  const handlePhoneNumberChange = (event) => {
    setPerson({ ...person, phoneNumber: event.target.value });
  };

  return (
    <div className="general-info">
      <form>
        <fieldset>
          <legend>General Info:</legend>
          <FormInput
            label={"First name:"}
            type={"text"}
            className={"first-name"}
            value={person.firstName}
            onChange={handleFirstNameChange}
          />

          <FormInput
            label={"Last name:"}
            type={"text"}
            className={"last-name"}
            value={person.lastName}
            onChange={handleLastNameChange}
          />

          <FormInput
            label={"Email:"}
            type={"email"}
            className={"email"}
            value={person.email}
            onChange={handleEmailChange}
          />

          <FormInput
            label={"Phone number:"}
            type={"tel"}
            className={"tel"}
            value={person.phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <div className="form-control btn-group">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default GeneralInfo;
