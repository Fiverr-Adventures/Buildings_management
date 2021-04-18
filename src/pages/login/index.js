import { Container } from "react-bootstrap";
import Logo from '../../assets/icons/svg/logo.svg';
import FullGlowOrb from '../../assets/icons/svg/FullGlowOrb.svg';

export default function index() {
    return (
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0"}}>
            <div className="login-container">
                <img src={Logo}  alt="logo" className="logo"/>
                <div className="login">
                    <button className="b-text-m log-in">
                        Log in with Email
                    </button>
                    <p className= "x-small">or</p>
                    <button className="x-small">
                        Create an Account
                    </button>
                    <div className="Full-Glow-Orb">
                        <div style={{   backgroundImage: `url(${FullGlowOrb})`, 
                                        backgroundRepeat: 'no-repeat', 
                                        width: "342px", height: "342px"}}>
                            <h4>Welcome</h4>
                            <p className="b-text-r">
                                to the future of security
                            </p>
                        </div>
                    </div>
                </div>
            </div> 
        </Container>
    )
}
