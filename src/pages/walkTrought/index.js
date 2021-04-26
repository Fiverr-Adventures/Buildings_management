import {useState} from 'react';
import { Link } from 'react-router-dom';
import Intro from '../../components/helpUserUtils/intro';
import MyModal from '../../components/modal';
import Button2 from '../../components/b_button';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import { people } from '../../data/people'

const WalkTrought = () => {

    const [add, setAdd] = useState(false);
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }

    return (
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }} >
            <SideBar>
                <Page>
                    <Header title="People" add="Add People"/>
                    <CustomCard objects={people} type="people" />
                    <MyModal className="help-user walk-trought" onClick={getAdd} sendAdd = {getAdd}>
                        <div className="modal-g">
                            <Intro style={{marginBottom: '100px'}}/>
                            <div className="desc">
                                <div className="steps">
                                    <p className="title"><span>Step 1:</span>Add Building</p>
                                    <p className="title"><span>Step 2:</span>Add Doors</p>
                                    <p className="title"><span>Step 3:</span>Add Groups (of doors)</p>
                                    <p className="title"><span>Step 4:</span>Add People (connected to keys)</p>  
                                </div>
                        
                                <div className="buttons">
                                    <Link to="Home">
                                        <Button2 className="dont">Don’t Show Again</Button2>
                                    </Link>
                                    <Link to="Home">
                                        <Button2 className="next">Next</Button2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </MyModal>
                </Page>
            </SideBar>
        </Container>
      );
}
 
export default WalkTrought;