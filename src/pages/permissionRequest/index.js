import {useState} from 'react';
import MyModal from "../../components/modal";
import Steps from '../../components/steps';
import ReqProfil from '../../components/permRequestUtils/profil';
import ReqDesc from '../../components/permRequestUtils/reqDesc';
import Button2 from '../../components/b_button';
import ReqFrom from '../../components/permRequestUtils/reqFrom';
import ReqFor from '../../components/permRequestUtils/reqFor';
import ReqApproved from '../../components/permRequestUtils/reqApproved';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import { people } from '../../data/people'

const PrmsRequest = () => {

    const [add, setAdd] = useState(false);
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [nbrClick, setNbrClick] = useState(0);
    const handleSubmit= ()=>{
        setIsSubmitted(true);
        setNbrClick(old => old + 1 );
    }
    return (
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }} >
            <SideBar>
                <Page>
                    <Header title="People" add="Add People"/>
                    <CustomCard objects={people} type="people" />
                    <MyModal className="perm-request" onClick={getAdd} sendAdd = {getAdd}>
                        <div className="modal-g">
                            <h3>Permissions Request</h3>
                            <div className="desc">
                                <Steps className={isSubmitted ? "active-step" : null} nbr = {nbrClick}/>
                                
                                { nbrClick < 4 ?  !isSubmitted ? 
                                    [
                                        <div style={{marginTop:"40px"}}>
                                            <ReqProfil />
                                        </div>,
                                        <ReqDesc />
                                    ] :
                                    [
                                        <ReqFrom />,      
                                        <ReqFor />
                                    ]
                                    : <ReqApproved />
                                }
                                {nbrClick < 4 ? <div className="buttons">
                                    <Button2 className="submit" onClick={handleSubmit}>
                                        {!isSubmitted ? 'Submit' : 'Approve'}
                                    </Button2>
                                    <Button2 className="cancel">
                                    {!isSubmitted ? 'Cancel' : 'Deny'}
                                    </Button2>
                                </div> : null}
                            </div>
                        </div>
                    </MyModal>
                </Page>
            </SideBar>
        </Container>
     );
}
 
export default PrmsRequest;