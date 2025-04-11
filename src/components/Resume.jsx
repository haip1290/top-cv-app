function Resume({ generalInfo, education, experience, setIsSubmitted }) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <section>
        <div>
          Name: {generalInfo.firstName} {generalInfo.lastName}
        </div>
        <div>Email: {generalInfo.email}</div>
        <div>Phone: {generalInfo.phone}</div>
      </section>
      <section>
        <h4>Education</h4>
        <div>School: {education.school}</div>
        <div>Field of Study: {education.degree}</div>
        <div>Year of Graduation: {education.gradYear}</div>
      </section>
      <section>
        <h4>Work Experience</h4>
        <div>Company: {experience.company}</div>
        <div>Title: {experience.title}</div>
        <div>Responsibilities: {experience.responsibility}</div>
        <div>
          From {experience.startDate} to {experience.endDate}
        </div>
      </section>

      <button className="btn btn-edit" onClick={() => setIsSubmitted(false)}>
        Edit
      </button>
    </div>
  );
}

export default Resume;
