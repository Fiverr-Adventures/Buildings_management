import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { doors } from '../../data/doors';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

export default function Doors() {
    return (
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
               <Page>
                    <Header title="Doors" add="Add Door"/>
                    <CustomCard objects={doors} type="doors"/>
                </Page>  
             </SideBar>
        </Container>
    )
}