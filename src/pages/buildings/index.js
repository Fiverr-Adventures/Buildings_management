import {useState} from 'react';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { buildings } from '../../data/buildings';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import AddBuilding from '../../components/addBuilding';
import SingleBuilding from '../../components/singleBuilding';
import { buildingData } from '../../data/buildingInfo';

export default function Buildings() {
      
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
            new_object = buildingData.filter(obj => {
                return (obj.name = object.name)
              })
            setParam(new_object[0]);
        }
    }
  
    return (
         <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }}>
             <SideBar>
               <Page>
                    <Header title="Buildings" add="Add Building"addElem = {()=> setAdd1(true)} />
                    <CustomCard objects={buildings} type="buildings" getParam = {getData} />
                    {add1 ? <AddBuilding getAdd={getAdd1} /> : null}
                    {param && add2 ? <SingleBuilding object = {param} getAdd={getAdd2}/> : null}
                </Page>  
             </SideBar>
        </Container>
    )
}