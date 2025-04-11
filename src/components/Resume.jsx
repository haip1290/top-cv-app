function Resume({ person, setIsSubmitted }) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <div>Name: {person.name}</div>
      <button className="btn btn-edit" onClick={() => setIsSubmitted(false)}>
        Edit
      </button>
    </div>
  );
}

export default Resume;
