import FormInput from "./FormInput";

function Education({ education, handleChange }) {
  return (
    <fieldset className="education-info">
      <legend>EducationInfo</legend>

      <FormInput
        label="School Name:"
        type="text"
        className="school"
        name="school"
        value={education.school}
        onChange={handleChange}
      />

      <FormInput
        label="Field of Study:"
        type="text"
        className="degree"
        name="degree"
        value={education.degree}
        onChange={handleChange}
      />

      <FormInput
        label="Year of Graduation:"
        type="text"
        className="gradYear"
        name="gradYear"
        value={education.gradYear}
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default Education;
