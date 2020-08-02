"use state";

const SideDrawer = ({ open }) => {
  if (!open) return null;

  return (
    <div className="sideDrawer">
      <h1>SideDrawer</h1>
    </div>
  );
};

const Header = () => {
  const [open, SetOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="logo">
          <img
            src="http://navprayas.in/static/img/pp2.png"
            alt="Navprayas Log"
          />
        </div>

        <button className="ham" onClick={() => SetOpen(!open)}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>

      <ul className="navbar-items">
        <li>
          <a className="navbar-item" href="#">
            Home
          </a>
        </li>
        <li className="dropDown">
          <a className="navbar-item " href="#">
            Examination
          </a>
          <div className="dropDown-content">
            <a className="navbar-item" href="#">
              Results
            </a>

            <a className="navbar-item" href="#">
              Solutions
            </a>
          </div>
        </li>
        <li>
          <a className="navbar-item" href="#">
            Events
          </a>
        </li>
        <li>
          <a className="navbar-item" href="#">
            Gallery
          </a>
        </li>
        <li className="dropDown">
          <a className="navbar-item " href="#">
            Downloads
          </a>
          <div className="dropDown-content">
            <a className="navbar-item" href="#">
              Previous Paper
            </a>

            <a className="navbar-item" href="#">
              Sample Paper
            </a>
          </div>
        </li>
      </ul>

      <div className="navbar-items right">
        <a className="navbar-link">Login</a>
        <a className="navbar-link rounded">Sign Up</a>
      </div>
      <SideDrawer open={open} />
    </nav>
  );
};

ReactDOM.render(<Header />, document.getElementById("root"));
