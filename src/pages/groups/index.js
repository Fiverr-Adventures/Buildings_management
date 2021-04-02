import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { groups } from '../../data/groups';
import Page from '../../components/page';

export default function Groups() {
    return (
        <Container>
            <Page>
                <h3>Groups</h3>
                <CustomCard objects={groups} type="groups"/>
            </Page>
        </Container>
    )
}