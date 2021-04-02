import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { doors } from '../../data/doors';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

export default function Doors() {
    return (
         <Container style={{maxWidth: "1920px"}}>
             <SideBar>
               <Page>
                    <Header title="Doors" add="Add Door"/>
                    <CustomCard objects={doors} type="doors"/>
                </Page>  
             </SideBar>
        </Container>
    )
}