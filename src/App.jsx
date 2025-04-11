import { useState } from "react";
import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import Resume from "./components/Resume";

function App() {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

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

  return isSubmitted ? (
    <>
      <Resume person={person} setIsSubmitted={setIsSubmitted} />
    </>
  ) : (
    <>
      <h1>CV Application</h1>
      <GeneralInfo
        person={person}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleEmailChange={handleEmailChange}
        handlePhoneNumberChange={handlePhoneNumberChange}
      />
      <button
        type="submit"
        className="btn btn-submit"
        onClick={() => setIsSubmitted(true)}
      >
        Submit
      </button>
    </>
  );
}

export default App;
