import FormInput from "./FormInput";

function Experience({ experience, handleChange }) {
  return (
    <fieldset className="experience">
      <legend>Work Experience:</legend>
      <FormInput
        label="Company:"
        type="text"
        className="company"
        name="company"
        value={experience.company}
        onChange={handleChange}
      />

      <FormInput
        label="Title:"
        type="text"
        className="title"
        name="title"
        value={experience.title}
        onChange={handleChange}
      />

      <FormInput
        label="Responsibility:"
        type="text"
        className="responsibility"
        name="responsibility"
        value={experience.responsibility}
        onChange={handleChange}
      />

      <FormInput
        label="Start Date:"
        type="date"
        className="startDate"
        name="startDate"
        value={experience.startDate}
        onChange={handleChange}
      />
      <FormInput
        label="End Date:"
        type="date"
        className="endDate"
        name="endDate"
        value={experience.endDate}
        onChange={handleChange}
      />
    </fieldset>
  );
}

export default Experience;
