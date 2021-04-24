import {useState} from 'react';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { doors } from '../../data/doors';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import AddDoor from '../../components/addDoor';
import SingleDoor from '../../components/singleDoor';
import { doorData } from '../../data/doorInfo';


export default function Doors() {

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
            new_object = doorData.filter(obj => {
                return (splited[1]===obj.name && splited[0]===obj.building)
              })
            setParam(new_object[0]);
        }
    }
  
    return (
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
               <Page>
                    <Header title="Doors" add="Add Door" addElem = {()=> setAdd1(true)}/>
                    <CustomCard objects={doors} type="doors" getParam = {getData}/>
                    {add1 ? <AddDoor getAdd={getAdd1} /> : null}
                    {param && add2 ? <SingleDoor object = {param} getAdd={getAdd2}/> : null}
                </Page>  
             </SideBar>
        </Container>
    )
}