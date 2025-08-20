import { useState } from "react";
import "./App.css";

const links = [
  { name: "Home", icon: "🏠" },
  { name: "Profile", icon: "👤" },
  { name: "Messages", icon: "✉️" },
  { name: "Settings", icon: "⚙️" },
  { name: "Logout", icon: "🚪" },
];

function App() {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <div className="app-container">
      <aside className={`sidebar ${open ? "" : "sidebar-closed"}`}>
        <div className="sidebar-header">
          {open ? <div className="logo-placeholder">Logo</div> : null}

          <button
            className={`toggle-btn ${open? "" : "toggle-btn-closed"}`}
            onClick={toggleSidebar}
            aria-label={open ? "Close sidebar" : "Open sidebar"}
          >
            <svg
              className="toggle-icon"
              viewBox="0 0 512 512"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill={open ? "var(--primary-color)" : "var(--secondary-color)"}
                stroke="none"
              >
                <path
                  d="M1046 4464 c-185 -45 -347 -208 -391 -396 -22 -96 -22 -2922 0 -3017
  35 -148 148 -289 285 -353 41 -20 99 -41 128 -47 37 -8 487 -11 1495 -11 1236
  0 1451 2 1505 15 190 45 352 206 397 396 22 97 22 2921 0 3018 -45 190 -207
  351 -397 396 -92 22 -2932 21 -3022 -1z m1299 -1904 l0 -1705 -620 0 -620 0
  56 26 c-79 37 -131 88 -165 161 l-29 63 0 1455 0 1455 28 60 c15 33 42 75 60
  93 36 38 108 78 164 91 21 5 308 8 638 8 l600 -2 0 -1705z m1678 1695 c103
  27 167 -82 216 -185 l26 -55 0 -1455 0 -1455 -26 -55 c-37 -80 -81 -125 -157
  162 l-67 -33 -727 -3 -728 -3 0 1711 0 1710 703 0 c590 0 712 -2 760 -15z"
                />
                <path
                  d="M1118 3823 c-56 -35 -66 -117 -19 -164 l29 -29 472 0 472 0 29 29
  c48 49 34 142 -26 169 -19 9 -148 12 -478 12 -403 -1 -455 -2 -479 -17z"
                />
                <path
                  d="M1099 3381 c-49 -49 -36 -133 25 -166 27 -14 71 -16 383 -13 l351 3
  26 24 c51 48 40 142 -20 170 -17 7 -140 11 -380 11 l-356 0 -29 -29z"
                />
                <path
                  d="M1134 2976 c-41 -18 -64 -52 -64 -96 0 -45 23 -78 66 -96 49 -21 879
  -21 928 0 43 18 66 51 66 96 0 45 -23 78 -66 96 -48 20 -884 20 -930 0z"
                />
                <path
                  d="M1118 2543 c-56 -35 -66 -117 -19 -164 l29 -29 356 0 c240 0 363 4
  380 11 60 28 71 122 20 170 l-26 24 -356 2 c-320 3 -360 1 -384 -14z"
                />
              </g>
            </svg>
          </button>
        </div>
        {open ? (
          <nav className="sidebar-menu">
            <ul>
              {links.map((link) => (
                <li className="menu-element" key={link.name}>
                  <a href="#">
                    <span className="menu-icon">{link.icon}</span>
                    <span className="link-text">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </aside>
    </div>
  );
}

export default App;
