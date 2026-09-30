const skills = [
    { name: "Web Development", tag: "Frontend + Backend" },
    { name: "UI/UX Design", tag: "Design systems" },
    { name: "Data Science", tag: "Python + Analytics" },
    { name: "Marketing", tag: "Brand + Growth" },
    { name: "Photography", tag: "Storytelling" },
    { name: "Language Learning", tag: "Speaking + Writing" },
];

function Skills() {
    return (
        <div className="page-section">
            <div className="section-header">
                <span className="eyebrow">Discover talent</span>
                <h1>Explore skills</h1>
                <p>Connect with peers who can help you build confidence, creativity, and real-world expertise.</p>
            </div>

            <div className="skill-grid">
                {skills.map((skill) => (
                    <article key={skill.name} className="skill-card">
                        <div className="skill-icon">✦</div>
                        <h3>{skill.name}</h3>
                        <p>{skill.tag}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Skills;
