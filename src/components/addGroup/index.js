import  {useState } from "react";
import MyModal from "../../components/modal";
import SearchBar from "../../components/searchBar";
import Input from "../../components/input";
import Tag from '../../components/tags';
import MyButton from '../../components/s_button';

export default function AddGroup(props) {

    const [add, setAdd] = useState(false);
    
    const getAdd = (isClick)=> {
        setAdd(isClick);
    }
    const passAdd = ()=> {
        props.getAdd(add);
    }

    return (
        <MyModal sendAdd = {getAdd} onClick={passAdd} >
            <div className="modal-g">
                <h3 >Add Group</h3>
                <div className="desc">
                    <p className="large parag">
                        Create a group of doors to more easily manage permissions. For example,
                        group all entrance doors of a Residence building and add an end date when
                        the lease ends. Or group communal rooms across floors to have them
                        auto-lock after a certain time.
                    </p>
                    <form className="form">
                        <div className="input-details">
                            <div className="inputs">
                                <div className="group-input">
                                    <label>Group Name</label>
                                    <Input className="input-g"/>  
                                </div>
                                <div className="group-input">
                                    <label>Group Manager Email</label>
                                    <Input className="input-g"/>  
                                </div>  
                            </div>
                            <div className="date-g">
                                <p className="large">Start Date</p>
                                <p className="large" style={{color: "#178fed"}}>Add End Date</p>
                                <p className="large">Set a Schedule</p>
                            </div>
                        </div>
                        <div className="search-door">
                            <label>Doors</label>
                            <SearchBar />
                        </div>
                        <div className="tags">
                            <Tag text = "Witte Resident" className="tag-g"/>
                            <Tag text = "College of L&S" className="tag-g"/>
                        </div>
                        <MyButton  className1="g-container" className2="small-b">Save</MyButton>
                    </form>
                </div>
            </div>
        </MyModal>
    );
}