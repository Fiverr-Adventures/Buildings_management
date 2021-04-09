import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { buildings } from '../../data/buildings';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";

export default function Buildings() {
      
    return (
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
               <Page>
                    <Header title="Buildings" add="Add Building"/>
                    <CustomCard objects={buildings} type="buildings"/>
                </Page>  

             </SideBar>
        </Container>
    )
}