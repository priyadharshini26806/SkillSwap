function Register() {
    return (
        <div className="page-section auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <span className="eyebrow">Start learning</span>
                    <h1>Create account</h1>
                </div>

                <form className="auth-form">
                    <label className="field">
                        <span>Full name</span>
                        <input type="text" placeholder="Your full name" />
                    </label>

                    <label className="field">
                        <span>Email address</span>
                        <input type="email" placeholder="you@example.com" />
                    </label>

                    <label className="field">
                        <span>Password</span>
                        <input type="password" placeholder="Create a password" />
                    </label>

                    <button type="submit" className="primary-btn full-width">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default Register;