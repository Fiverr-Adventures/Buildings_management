import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Intro from '../../components/helpUserUtils/intro';
import MyModal from '../../components/modal';
import Button2 from '../../components/b_button';
import ManagerPermission from '../../components/helpUserUtils/managerPerm';
import SplashScreen2 from '../../assets/icons/videos/LL-Splash.mp4';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import { people } from '../../data/people'

const HelpUser = () => {

    const [add, setAdd] = useState(false);
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }

    const [showLoader, setshowLoader] = useState(true);
    useEffect(
        () => {
          let timer1 = setTimeout(() => setshowLoader(false),5000);
    
          return () => {
            clearTimeout(timer1);
          };
        },
        []
      );
    // handle type (student or Executive Manager )
    var type = "Executive Manager";
    return (
        showLoader ? <video 
            autoPlay
            muted
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}          
            >
            <source src= {SplashScreen2} type="video/mp4" />
        </video> :
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }} >
            <SideBar>
                <Page>
                    <Header title="People" add="Add People"/>
                    <CustomCard objects={people} type="people" />
                    <MyModal className="help-user" onClick={getAdd} sendAdd = {getAdd}>
                        <div className="modal-g">
                            <Intro />
                            <h4>User Type</h4>
                            <div className="desc">
                                <div className="user-type">
                                    <label className="exec-manager"
                                        style={{color: type !== "Student" ? "#fec32d" : null}}>
                                        Executive Manager
                                    </label>
                                    <label className="build-manager">Building Manager</label>
                                    <div className="stud">
                                        <label style={{color: type === "Student" ? "#fec32d" : null}}>
                                            Student
                                        </label>
                                        <label>Staff</label>
                                        <label>Faculty</label>  
                                    </div> 
                                </div>
                                <h4>Permissions</h4>
                            {type === "Student" ? <p className="label-2 permission">
                                    Based on your user type you do not oversee any buildings, however, you
                                    can request access to certain buildings. These will be approved or denied
                                    by the building manger and executive manager.
                                </p> :
                                <ManagerPermission />}
                                <div className="buttons">
                                    <Link to="home">
                                        <Button2 className="dont">Don’t Show Again</Button2>
                                    </Link>
                                    <Link to="WalkTrought">
                                        <Button2 className="next" >Next</Button2>
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
 
export default HelpUser;