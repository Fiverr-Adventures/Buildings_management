import {useState} from 'react';
import MyModal from "../../components/modal";
import BuildingInfo from '../../components/buildingInfo';
import Button2 from '../../components/b_button';
import {Floors} from '../../data/floors';

export default function SingleBuilding (props) {
    let index = 0;
    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }

    const passAdd = ()=> {
        props.getAdd(add);
    }

    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} className="single-person">
            <div className="modal-g">
                <h3>Building</h3>
                <div className="desc">
                    <BuildingInfo object={props.object} />
                    <div className="floors">
                        <p className="large">Floor Layouts</p>
                        <div className="floor-scroll">
                            { Floors.map(obj => {
                                return ( 
                                    <div className="floor-layout" key={index++} >
                                        <label>{obj}</label>
                                        <button className="large">edit</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="save-delete">
                        <Button2 className="save">Save</Button2>
                        <Button2  className="delete">Delete</Button2>
                    </div>
                </div>
            </div>
        </MyModal>
    )
}