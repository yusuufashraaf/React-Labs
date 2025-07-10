import "./Navbar.css";

function Navbar() {
  const navbarList = [
    { id: "about", label: "About Me" },
    { id: "skills", label: "Skills" },
    { id: "contacts", label: "Contact Me" },
  ];

  return (
    <div className="Container">
      <div className="Name">
        <h1>Youssef</h1>
      </div>
      <div className="Navbar">
        <ul>
          {navbarList.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
