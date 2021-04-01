import Home from "../../assets/icons/svg/home.svg";
import People from "../../assets/icons/svg/people.svg";
import Groups from "../../assets/icons/svg/groups.svg";
import Doors from "../../assets/icons/svg/doors.svg";
import Buildings from "../../assets/icons/svg/buildings.svg";
import { Container } from 'react-bootstrap';

export default function SideBar() {
    return (
        <Container>
           <div className="sideBar">
                <img src={Home} alt="home" />
                <img src={People} alt="people" />
                <img src={Groups} alt="groups" />
                <img src={Doors} alt="doors" />
                <img src={Buildings} alt="buildings" />
            </div>  
        </Container>
    )
   
}