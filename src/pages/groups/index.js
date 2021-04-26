import  {useState } from "react";
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { groups } from '../../data/groups';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import AddGroup from '../../components/addGroup';
import SingleGroup from '../../components/singleGroup';
import { groupData } from '../../data/groupInfo';

export default function Groups() {

    const [param, setParam] = useState('');
    const [add1, setAdd1] = useState(false);
    const [add2, setAdd2] = useState(false);

    const getAdd1 = (value)=> {
            setAdd1(value);
    }
    const getAdd2 = (value)=> {
        setAdd2(value);
    }
    const getData = (object)=> {
        var new_object;
        if (object !== '')
        {
            setAdd2(true);
            var splited = object.name.split(':');   
            new_object = groupData.filter(obj => {
                return (splited[1]===obj.name && splited[0]===obj.building)
              })
            setParam(new_object[0]);
        }
    }
  
    return (
        
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
                <Page>
                    <Header title="Groups" add="Add Group"  addElem = {()=> setAdd1(true)}/>
                    <CustomCard objects={groups} type="groups" getParam = {getData}/>
                    {add1 ? <AddGroup getAdd={getAdd1} /> : null}
                    {param && add2 ? <SingleGroup object = {param} getAdd={getAdd2} /> : null}
                 </Page>
             </SideBar>
        </Container>
    )
}