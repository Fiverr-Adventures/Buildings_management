import {  useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import Page from '../../components/page';
import SideBar from "../../components/sideBar";
import Lottie from "react-lottie";
import SplashScreen from "../../assets/icons/Lottie JSON/Splash-screen.json";

export default function Home() {
    const [showLoader, setshowLoader] = useState(true);

    useEffect(() => {
       setshowLoader(false);
    });

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: SplashScreen,
        width:990,
        height: 990,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    return (
         <Container style={{maxWidth: "1920px"}}>
               { showLoader ? <Page style={{position: "relative",
                                            zIndex: 2,
                                            top: "0", 
                                            left: "0",
                                            right: "0",
                                            borderRadius:"0"
                                        }}> 
                        <Lottie 
                        options={defaultOptions}
                        height={990}
                        width={990} /> </Page>   : 
                <SideBar>
                    <Page> 
                        <div className="home">
                            <h3> Leaftlet.js map goes here </h3>
                        </div>
                    </Page>   
                </SideBar>
               }
        </Container>
    )
}