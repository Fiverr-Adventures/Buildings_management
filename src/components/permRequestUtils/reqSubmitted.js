import ReqInfo from '../../components/permRequestUtils/reqInfo';
import ReqProfil from '../../components/permRequestUtils/profil';
import ReqDesc from '../../components/permRequestUtils/reqDesc';
const ReqSubmitted = () => {
    return ( 
        <div className="req-submitted">
            <h4>Request from</h4>
            <div>
                <ReqProfil />
                <ReqInfo    key1="User Type" value1="User Type"
                            key1="Key(s) Type" value1="Wiscard"
                            key1="Wiscard" value1="279024"
                />
                <p className="x-small">Note</p>
            </div>
        </div>
     );
}
 
export default ReqSubmitted;