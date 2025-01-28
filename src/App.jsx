import "./styles/App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import img_man from "./assets/profile1.jpeg";
import img_woman from "./assets/profile2.jpg";
import Wrapper from "./components/Wrapper";
import {useState} from "react";


const App = () => {
    const profiles =[
        {
            img: img_man,
            name: 'John Doe',
            title: 'Software Engineer',
            email: 'a@a.com'
        },
        {
            img: img_woman,
            name: 'Jane Doe',
            title: 'Product Designer',
            email: 'b@b.com'
        },
        {
            img: img_man,
            name: 'Bob Doe',
            title: 'Software Engineer',
            email: 'c@c.com'
        },
        {
            img: img_woman,
            name: 'Janet Doe',
            title: 'UX Designer',
            email: 'd@d.com'
        },
        {
            img: img_man,
            name: 'Jason Doe',
            title: 'Software Engineer',
            email: 'e@e.com'
        },
        {
            img: img_woman,
            name: 'Beth Doe',
            title: 'UX Designer',
            email: 'f@f.com'
        },
    ];
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    const titles = [...new Set(profiles.map((profile) => profile.title))];
    const [title, setTitle] = useState("");
    //update the title
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
       
    };

    const [search, setSearch] = useState("");
    //update the title
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClear = () => {

    }

    const filteredProfiles = profiles.filter((profile) => 
        (title === "" || profile.title === title && profile.name.toLowerCase().includes(search.toLowerCase()))
    )

    
    return (
        <>
            <header>
                <Navbar/>
            </header>
            <main>
                <Wrapper>
                    <h1>Profile App</h1>
                    <button onClick={handleClick}>
                        {clicked ? "Click me" : "Clicked"}
                    </button>
                </Wrapper>
                <Wrapper>
                    <About />
                </Wrapper>
                <Wrapper>
                    <div className="filter-wrapper">
                        <div className="filter--select">
                            <label htmlFor="title-select">Select a title:</label>
                            <select id="title-select" onChange={handleTitleChange}>
                                <option value="">All</option>
                                {titles.map((title) => (<option key={title} value = {title}> {title}</option>))}
                                {/*<option value="SoftwareEngineer">Software Engineer</option>
                                <option value="UX Designer">UX Designer</option>
                                <option value="Product Designer">Product Designer</option>*/}
                            </select>
                        </div>
                    </div>
                    <div className="filter--search">
                        <label htmlFor="search">Search by name:</label>
                        <input
                            type = "text"
                            id = "search"
                            onChange={handleSearchChange}
                            value = {search}
                            />
                    </div>
                    <div className="profile-cards">
                        {filteredProfiles.map((profile) => (<Card key={profile.email} {...profile} />
                        ))}
                    </div>
                </Wrapper>
            </main>
            
        </>
    );
}

export default App;