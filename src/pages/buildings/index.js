import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { buildings } from '../../data/buildings';
import Page from '../../components/page';

export default function Buildings() {
    return (
        <Container>
            <Page>
                <h3>Buildings</h3>
                <CustomCard objects={buildings} type="buildings"/>
            </Page>
        </Container>
    )
}