import ReqProfil from './profil';
import ReqInfo from './reqInfo';
import Button2 from '../../components/b_button'
const ReqApproved = () => {
    return ( 
        <div className="req-app-container">
            <h4 className="approved-title">Approved</h4>
            <div className="req-approved">
                <ReqProfil />
                <div className="req-infos-app">
                    <ReqInfo    key1="User Type" value1="Student"
                                key2="Key(s) Type" value2="Wiscard"
                                key3="Key(s)" value3="279024" className="req-app"
                    />
                    <ReqInfo    key1="Building" value1="Wendt Commons"
                                key2="Door(s)" value2="Room 433"
                                key3="Type" value3="Classroom" 
                    />
                </div>
                <Button2 className="done">Done</Button2>
            </div>
        </div>
     );
}
 
export default ReqApproved;