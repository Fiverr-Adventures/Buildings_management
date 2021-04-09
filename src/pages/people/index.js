import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { people } from '../../data/people';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

export default function People() {
    return (
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
            <SideBar>
                <Page>
                    <Header title="People" add="Add People"/>
                    <CustomCard objects={people} type="people"/>
                </Page>
            </SideBar>
        </Container>
    )
}