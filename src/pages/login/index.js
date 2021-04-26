import { Container } from "react-bootstrap";
import Logo from '../../assets/icons/svg/logo.svg';
import FullGlowOrb from '../../assets/icons/svg/FullGlowOrb.svg';
import ApartmentAmbient from '../../assets/icons/videos/Apartment-Ambient-min.mp4';
import { Link } from 'react-router-dom';

export default function index() {
    return (
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0"}}>
            <video 
                autoPlay
                muted
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}          
            >
                <source src= {ApartmentAmbient} type="video/mp4" />
            </video>
            <div className="login-container">
                <img src={Logo}  alt="logo" className="logo"/>
                <div className="login-page">
                    <div className="Full-Glow-Orb">
                        <div className="welcome" style={{   backgroundImage: `url(${FullGlowOrb})`, 
                                        backgroundRepeat: 'no-repeat', 
                                        width: "340px", height: "340px"}} >
                            <h4>Welcome</h4>
                            <p className="b-text-r">
                                to the future of security
                            </p>
                        </div>
                    </div>
                    <div className="login">
                        <Link to="HelpUser" className="b-text-m log-in">Log in with Email</Link>
                        <p className= "x-small">or</p>
                        <button className="x-small sign-up">
                            Create an Account
                        </button> 
                    </div>
                </div>
            </div> 
        </Container>
    )
}
