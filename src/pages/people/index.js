import {useState} from 'react';
import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { people } from '../../data/people';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import AddPeople from '../../components/addPeople';
import SinglePerson from '../../components/singlePerson';

export default function People() {
    const [param, setParam] = useState('');
    const [add1, setAdd1] = useState(false);
    const [add2, setAdd2] = useState(false);

    const getAdd1 = (value)=> {
            setAdd1(value);
            console.log(add1);
    }
    const getAdd2 = (value)=> {
        setAdd2(value);
        console.log(add2);
    }
    const getData = (object)=> {
        if (object != '')
        {
            setParam(object);
            setAdd2(true)
            console.log(object);
        }
    }
  
    return (
        <Container style={{maxWidth: "100%", paddingRight: "0",paddingLeft: "0" }} >
            <SideBar>
                <Page>
                    <Header title="People" add="Add People" addElem = {()=> setAdd1(true)}/>
                    <CustomCard objects={people} type="people" getParam = {getData}/>
                    {add1 ? <AddPeople getAdd={getAdd1} /> : null}
                    {param && add2 ? <SinglePerson param = {param} getAdd={getAdd2}/> : null}
                </Page>
            </SideBar>
        </Container>
    )
}