import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { groups } from '../../data/groups';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

export default function Groups() {
    return (
         <Container style={{maxWidth: "1920px"}}>
             <SideBar>
                <Page>
                    <Header title="Groups" add="Add Group"/>
                    <CustomCard objects={groups} type="groups"/>
                 </Page> 
             </SideBar>
        </Container>
    )
}