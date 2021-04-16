import  {useState } from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { groups } from '../../data/groups';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import MyModal from "../../components/modal";
import SearchBar from "../../components/searchBar";
import Input from "../../components/input";
import Tag from '../../components/tags';
import MyButton from '../../components/s_button';

export default function Groups(props) {

  const [open, setOpen] = useState(true);
  const handleOpen = (isClick)=> {
        setOpen(isClick);
  }
    const AddGroup = () => {
        return (
            <MyModal parentCallback = {handleOpen} >
                <div className="modal-g">
                    <h3 >Add Group</h3>
                    <p className="large parag">
                        Create a group of doors to more easily manage permissions. For example,
                        group all entrance doors of a Residence building and add an end date when
                        the lease ends. Or group communal rooms across floors to have them
                        auto-lock after a certain time.
                    </p>
                    <div className="form">
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
                        <MyButton className="small-b">Save</MyButton>
                    </div>
                </div>
            </MyModal>
        );
    }

    return (
        
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
                <Page>
                    <Header title="Groups" add="Add Group" addElem = {()=> setOpen(true)}/>
                    <CustomCard objects={groups} type="groups" />
                    {open ? <AddGroup /> : null}
                 </Page> 
             </SideBar>
        </Container>
    )
}