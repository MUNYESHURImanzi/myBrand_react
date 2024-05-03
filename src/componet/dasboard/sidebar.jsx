
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item pt-2">
                            <Link className="sidebar-link" to="/dashboard" aria-expanded="false">
                                <i className="far fa-clock" aria-hidden="true"></i>
                                <span className="hide-menu">Dashboard</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/user" aria-expanded="false">
                                <i className="fa fa-globe" aria-hidden="true"></i>
                                <span className="hide-menu">User</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/blogdashboard" aria-expanded="false">
                                <i className="fa fa-columns" aria-hidden="true"></i>
                                <span className="hide-menu">Blog</span>
                            </Link>
                        </li>
                        <li className="sidebar-item">
                            <Link className="sidebar-link" to="/Dashbordcontact" aria-expanded="false">
                                <i className="fa fa-info-circle" aria-hidden="true"></i>
                                <span className="hide-menu">Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
