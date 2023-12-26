import { Outlet, Link } from "react-router-dom";

function TopNavBar () {
    return (
        <div>
            <nav>
                <ul id="navbar">
                    <li>
                        <Link to="/personal-site">Home</Link>
                    </li>
                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </div>
    )
}

export default TopNavBar();