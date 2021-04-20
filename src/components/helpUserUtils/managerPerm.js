import BuildIcon from '../../assets/icons/svg/buildIcon.svg';
import DoorIcon from '../../assets/icons/svg/doorIcon.svg';

const managerPermission = () => {

    return (
        <div>
          <div>
            <img src={BuildIcon} alt="" />
            <p className="number">214</p>
            <p className="label-3">See full list in the ‘Buildings’ page</p>
          </div>
          <div>
            <img src={DoorIcon} alt="" />
            <p className="number">6,472</p>
            <p className="label-3">See full list in the ‘Doors’ page</p>
          </div>
          
        </div>
      );
}
 
export default managerPermission;