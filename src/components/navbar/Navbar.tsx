import "./navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <img src="logo.svg" alt="" />
                <span>Dashboard</span>
            </div>
            <div className="icons">
                <img src="/search.svg" className="icon" />
                <img src="/app.svg" className="icon" />
                <img src="/expand.svg" className="icon" />
                <div className="notification">
                    <img src="/notifications.svg" alt="" />
                    <span>1</span>
                </div>
                <div className="user">

                    <span>Jogn Doe</span>
                </div>
                <img src="/settings.svg" className="icon" />
            </div>
        </div>
    );
};

export default Navbar;
