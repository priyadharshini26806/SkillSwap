import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="topbar">
            <div className="nav-inner">
                <div className="nav-shell">
                    <Link to="/" className="brand" aria-label="SkillSwap home">
                        <span className="brand-mark">S</span>
                        <span>SkillSwap</span>
                    </Link>

                    <div className="nav-links">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/skills" className="nav-link">Explore Skills</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                        <Link to="/register" className="nav-link nav-cta">Register</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;