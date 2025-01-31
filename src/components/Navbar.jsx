import style from "../styles/Navbar.module.css";

const Navbar = ({mode, updateMode}) => {
    return (
        <nav className={style["navbar"]}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Profiles</a>
                </li>
            </ul>
            <button onClick={updateMode}>
                {mode === "light" ? "Light Mode" : "Dark Mode"}
            </button>
        </nav>
    );
}

export default Navbar;