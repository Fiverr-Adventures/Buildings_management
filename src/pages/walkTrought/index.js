import {useState} from 'react';
import { Link } from 'react-router-dom';
import Intro from '../../components/helpUserUtils/intro';
import MyModal from '../../components/modal';
import Button2 from '../../components/b_button';

const WalkTrought = () => {

    const [open, setOpen] = useState(true);
    const handleOpen = (isClick)=> {
        setOpen(isClick);
    }
    return (
        <MyModal className="help-user walk-trought" parentCallback = {handleOpen}>
            <Intro style={{marginBottom: '100px'}}/>
            <div className="steps">
                <p className="title"><span>Step 1:</span>Add Building</p>
                <p className="title"><span>Step 2:</span>Add Doors</p>
                <p className="title"><span>Step 3:</span>Add Groups (of doors)</p>
                <p className="title"><span>Step 4:</span>Add People (connected to keys)</p>  
            </div>
      
            <div className="buttons">
                <Link to="Home">
                    <Button2 className="dont">Don’t Show Again</Button2>
                </Link>
                <Link to="Home">
                    <Button2 className="next">Next</Button2>
                </Link>
            </div>
        </MyModal>
      );
}
 
export default WalkTrought;