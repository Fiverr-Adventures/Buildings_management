import ReqInfo from './reqInfo';
import ReqProfil from './profil';
import ReqDesc from './reqDesc';
const ReqFrom = () => {
    return ( 
        <div className="req-from">
            <h4 className="req-title">Request from</h4>
            <div className="req-infos">
                <ReqProfil />
                <ReqInfo    key1="User Type" value1="Student"
                            key2="Key(s) Type" value2="Wiscard"
                            key3="Key(s)" value3="279024"
                />
            </div>
            <div className="req-desc-note">
                <p className="x-small note">Note</p>
                <ReqDesc className="req-descr"/>
            </div>
        </div>
     );
}
 
export default ReqFrom;