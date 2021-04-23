import MyModal from "../../components/modal";
import Steps from '../../components/steps';
import ReqProfil from '../../components/permRequestUtils/profil';
import ReqDesc from '../../components/permRequestUtils/reqDesc';
import Button2 from '../../components/b_button';

const PrmsRequest = () => {
    return ( 
        <MyModal className="perm-request">
            <h3>Permissions Request</h3>
            <Steps />

            <ReqProfil />
            <ReqDesc />
            <div className="buttons">
                <Button2 className="submit">Submit</Button2>
                <Button2 className="cancel">Cancel</Button2>
            </div>
        </MyModal>
     );
}
 
export default PrmsRequest;