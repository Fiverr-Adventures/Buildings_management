import  {useState } from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { groups } from '../../data/groups';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import Card2 from "../../components/card2";

export default function Groups(props) {

  const [open, setOpen] = useState(false);

    const AddGroup = () => {
        return (
            <Card2>
                <div>
                    <h1 style={{color:"black"}}>hello world</h1>
                    <p>Adipisicing ut aliquip elit esse adipisicing nostrud irure. .</p>
                </div>
            </Card2>
        );
    }

    return (
        
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
                <Page>
                    <Header title="Groups" add="Add Group" addElem = {()=> setOpen(true)}/>
                    <CustomCard objects={groups} type="groups" />
                    {/* {open ? AddGroup : null} */}
                 </Page> 
             </SideBar>
        </Container>
    )
}