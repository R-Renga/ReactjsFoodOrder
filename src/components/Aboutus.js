import { Outlet } from "react-router-dom";
import Profile from "./Profile";


const About = () => {
    return (
        <div>
            <h1>Aboutus</h1>
            <p>This is the react router chapter - 07 </p>
            <Outlet/>
        </div>
        
    )
}

export default About;