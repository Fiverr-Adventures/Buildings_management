import { Container } from "react-bootstrap";
import Page from '../../components/page';
import SideBar from "../../components/sideBar";

export default function Home() {
    return (
         <Container style={{maxWidth: "1920px"}}>
            <SideBar>
                <Page>
                    <div className="home">
                        <h3> Leaftlet.js map goes here </h3>
                    </div>
                </Page>   
            </SideBar>
        </Container>
    )
}