import MyModal from "../../components/modal";
import Steps from '../../components/steps';
import ReqProfil from '../../components/permRequestUtils/profil';
import ReqDesc from '../../components/permRequestUtils/reqDesc';
import Button2 from '../../components/b_button';
import ReqFrom from '../../components/permRequestUtils/reqFrom';
import ReqFor from '../../components/permRequestUtils/reqFor';
import ReqApproved from '../../components/permRequestUtils/reqApproved';

const PrmsRequest = () => {
    return ( 
        <MyModal className="perm-request">
            <h3>Permissions Request</h3>
            <Steps />
            <ReqApproved />
            {/* <ReqFrom />
            <ReqFor /> */}
            {/* <ReqProfil />
            <ReqDesc /> */}
            {/* change submit by Approve and cance by Deny */}
            {/* <div className="buttons">
                <Button2 className="submit">Submit</Button2>
                <Button2 className="cancel">Cancel</Button2>
            </div> */}
        </MyModal>
     );
}
 
export default PrmsRequest;