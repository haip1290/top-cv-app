import { useState } from "react";
import "./styles/App.css";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Resume from "./components/Resume";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [education, setEducation] = useState({
    school: "",
    degree: "",
    gradYear: "",
  });

  const [experience, setExperience] = useState({
    company: "",
    title: "",
    responsibilites: "",
    startDate: "",
    endDate: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event, setter) => {
    const { name, value } = event.target;
    setter((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      !generalInfo.firstName ||
      !generalInfo.lastName ||
      !generalInfo.email ||
      !generalInfo.phone
    ) {
      alert("Please fill out all fields.");
      return;
    }
    setIsSubmitted(true);
  };

  return isSubmitted ? (
    <>
      <Resume
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        setIsSubmitted={setIsSubmitted}
      />
    </>
  ) : (
    <>
      <h1>CV Application</h1>
      <form>
        <GeneralInfo
          generalInfo={generalInfo}
          handleChange={(e) => handleChange(e, setGeneralInfo)}
        />
        <Education
          education={education}
          handleChange={(e) => handleChange(e, setEducation)}
        />
        <Experience
          experience={experience}
          handleChange={(e) => handleChange(e, setExperience)}
        />
        <button type="submit" className="btn btn-submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
