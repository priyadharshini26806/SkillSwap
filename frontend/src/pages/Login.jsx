function Login() {
    return (
        <div className="page-section auth-page">
            <div className="auth-card">
                <div className="auth-header">
                    <span className="eyebrow">Welcome back</span>
                    <h1>Log in</h1>
                </div>

                <form className="auth-form">
                    <label className="field">
                        <span>Email address</span>
                        <input type="email" placeholder="you@example.com" />
                    </label>

                    <label className="field">
                        <span>Password</span>
                        <input type="password" placeholder="Enter your password" />
                    </label>

                    <button type="submit" className="primary-btn full-width">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
