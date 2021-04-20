import BuildIcon from '../../assets/icons/svg/buildIcon.svg';
import DoorIcon from '../../assets/icons/svg/doorIcon.svg';

const managerPermission = () => {

    return (
        <div className="container-perm">
          <div>
            <div className="example">
              <img src={BuildIcon} alt="" />
              <p className="number">214</p> 
            </div>
            <p className="label-3">See full list in the ‘Buildings’ page</p>
          </div>
          <div>
            <div className="example">
              <img src={DoorIcon} alt="" />
              <p className="number">6,472</p>
            </div>
            <p className="label-3">See full list in the ‘Doors’ page</p>
          </div>
          
        </div>
      );
}
 
export default managerPermission;