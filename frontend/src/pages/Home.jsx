const features = [
    {
        title: "Browse by skill",
        text: "Find peers who teach exactly what you want to learn in a simple, searchable marketplace.",
    },
    {
        title: "Set your availability",
        text: "Share your schedule and offer flexible one-on-one sessions or short collaborative workshops.",
    },
    {
        title: "Build real confidence",
        text: "Practice with people who understand your journey and can help you grow faster in a safe environment.",
    },
];

const faqs = [
    {
        question: "How does SkillSwap work?",
        answer: "Students create profiles, list the skills they can teach or learn, and connect with peers based on shared interests and availability.",
    },
    {
        question: "Is it only for students?",
        answer: "The platform is designed primarily for students, but it also works well for early learners, club members, and peer mentors.",
    },
    {
        question: "Can I teach a skill I am still learning?",
        answer: "Yes. SkillSwap is built around peer learning, so sharing progress and helping someone else grow is encouraged.",
    },
    {
        question: "How do I get started?",
        answer: "Register, complete your profile, choose your teaching and learning skills, and start matching with classmates.",
    },
];

function Home() {
    return (
        <>
            <div className="page-section hero-section">
                <div className="hero-copy">
                    <span className="eyebrow">Student-to-student learning</span>
                    <h1>Learn. Share. Grow.</h1>
                    <p>
                        SkillSwap connects students who want to learn with students who can teach,
                        making skill exchange simple, practical, and community-driven.
                    </p>

                    <div className="cta-row">
                        <a href="/skills" className="primary-btn">Explore Skills</a>
                        <a href="/register" className="secondary-btn">Join now</a>
                    </div>

                    <div className="stats-row">
                        <div>
                            <strong>2k+</strong>
                            <span>Students</span>
                        </div>
                        <div>
                            <strong>120+</strong>
                            <span>Skills</span>
                        </div>
                        <div>
                            <strong>98%</strong>
                            <span>Positive feedback</span>
                        </div>
                    </div>
                </div>

                <div className="hero-card">
                    <div className="card-badge">Featured match</div>
                    <h3>UI Design Sprint</h3>
                    <p>Learn modern interface design from a peer who has built portfolio-ready projects.</p>

                    <div className="mini-list">
                        <span>Figma</span>
                        <span>UX Research</span>
                        <span>Design systems</span>
                    </div>

                    <div className="profile-pill">
                        <div className="avatar">A</div>
                        <div>
                            <strong>Aisha</strong>
                            <small>Product Design Mentor</small>
                        </div>
                    </div>
                </div>
            </div>

            <section className="page-section compact-section">
                <div className="section-header">
                    <span className="eyebrow">Why students love it</span>
                    <h2>Built for practical learning</h2>
                </div>

                <div className="feature-grid">
                    {features.map((feature) => (
                        <article key={feature.title} className="feature-card">
                            <div className="feature-icon">✦</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.text}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="page-section faq-section">
                <div className="section-header faq-header">
                    <span className="eyebrow">FAQ</span>
                    <h2>Everything you need to know</h2>
                </div>

                <div className="faq-list">
                    {faqs.map((item) => (
                        <div key={item.question} className="faq-item">
                            <h3>{item.question}</h3>
                            <p>{item.answer}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Home;