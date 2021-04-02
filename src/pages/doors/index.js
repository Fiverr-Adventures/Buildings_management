import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { doors } from '../../data/doors';
import Page from '../../components/page';

export default function Doors() {
    return (
        <Container>
            <Page>
                <h3>Doors</h3>
                <CustomCard objects={doors} type="doors"/>
            </Page>
        </Container>
    )
}