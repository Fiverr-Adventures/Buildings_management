import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { people } from '../../data/people';
import Page from '../../components/page';

export default function People() {
    return (
        <Container>
            <Page>
                <h3>People</h3>
                <CustomCard objects={people} type="people"/>
            </Page>
        </Container>
    )
}