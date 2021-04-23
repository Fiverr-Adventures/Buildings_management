import ReqInfo from './reqInfo';
import FloorLayout from '../../assets/icons/svg/reqMap.svg'
const ReqFor = (props) => {
    return ( 
        <div className="req-from">
            <h4 className="req-title">For</h4>
            <div className="req-infos-for">
                <ReqInfo    key1="Building" value1="Wendt Commons"
                            key2="Door(s)" value2="Room 433"
                            key3="Type" value3="Classroom"
                />
                <div className="floor-layout">
                    <img src={FloorLayout} alt="" />
                    <p className="b-text-b">Open Floor Layout ⇗</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReqFor;