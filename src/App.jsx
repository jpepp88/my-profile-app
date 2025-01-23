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
    ];
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };
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
                    <div className="profile-cards">
                        {profiles.map((profile) => (
                            <Card key={profile.email} {...profile} />
                        ))};
                    </div>
                </Wrapper>
            </main>
            
        </>
    );
}

export default App;