import "./Skills.css";

function Skills() {
  const skills = [
    { name: "HTML", value: "90%" },
    { name: "MySQL", value: "95%" },
    { name: "PHP", value: "30%" },
    { name: "MongoDB", value: "90%" },
    { name: "React", value: "20%" },
    { name: "JavaScript", value: "95%" },
  ];

  return (
    <div className="skills-container">
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-box">
            <p>{skill.name}</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: skill.value }}>
                {skill.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
