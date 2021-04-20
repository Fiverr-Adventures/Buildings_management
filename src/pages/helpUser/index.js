import {useState} from 'react';
import Intro from '../../components/helpUserUtils/intro';
import MyModal from '../../components/modal';
import Button2 from '../../components/b_button';
import ManagerPermission from '../../components/helpUserUtils/managerPerm';
const HelpUser = () => {

    const [open, setOpen] = useState(true);
    const handleOpen = (isClick)=> {
        setOpen(isClick);
    }

    return (
        <MyModal className="help-user" parentCallback = {handleOpen}>
            <Intro />
            <h4>User Type</h4>
            <div className="user-type">
                <label className="exec-manager">Executive Manager</label>
                <label className="build-manager">Building Manager</label>
                <div className="stud">
                    <label>Student</label>
                    <label>Staff</label>
                    <label>Faculty</label>  
                </div> 
            </div>
            <h4>Permissions</h4>
            {/* <p className="label-2 permission">
                Based on your user type you do not oversee any buildings, however, you
                can request access to certain buildings. These will be approved or denied
                by the building manger and executive manager.
            </p> */}
            <ManagerPermission />
            <div className="buttons">
                <Button2 className="dont">Don’t Show Again</Button2>
                <Button2 className="next">Next</Button2>
            </div>
        </MyModal>
        
     );
}
 
export default HelpUser;