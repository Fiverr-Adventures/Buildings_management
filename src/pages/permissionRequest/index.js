import {useState} from 'react';
import MyModal from "../../components/modal";
import Steps from '../../components/steps';
import ReqProfil from '../../components/permRequestUtils/profil';
import ReqDesc from '../../components/permRequestUtils/reqDesc';
import Button2 from '../../components/b_button';
import ReqFrom from '../../components/permRequestUtils/reqFrom';
import ReqFor from '../../components/permRequestUtils/reqFor';
import ReqApproved from '../../components/permRequestUtils/reqApproved';

const PrmsRequest = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [nbrClick, setNbrClick] = useState(0);
    const handleSubmit= ()=>{
        setIsSubmitted(true);
        setNbrClick(old => old + 1 );
    }
    return ( 
        <MyModal className="perm-request">
            <h3>Permissions Request</h3>
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
        </MyModal>
     );
}
 
export default PrmsRequest;