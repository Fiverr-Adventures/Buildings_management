import { Container } from "react-bootstrap";
import CustomCard from "../../components/card";
import { buildings } from '../../data/buildings';
import Page from '../../components/page';
import Header from "../../components/header";
import SideBar from "../../components/sideBar";
import { Scrollbars } from "react-custom-scrollbars";
export default function Buildings() {
    const renderThumb = ({ style, ...props }) => {
        const thumbStyle = {
          borderRadius: 10,
          backgroundColor: "#3a3b3c",
          height: 227
        };
        return <div style={{ ...style, ...thumbStyle }} {...props} />;
      };
      
      const CustomScrollbars = props => (
        <Scrollbars
          renderThumbVertical={renderThumb}
          {...props}
        />
      );
    return (
         <Container style={{maxWidth: "1920px"}}>
             <SideBar>
               <Page>
                    <Header title="Buildings" add="Add Building"/>
                    <CustomCard objects={buildings} type="buildings"/>
                    {/* </CustomScrollbars> */}
                </Page>  

             </SideBar>
        </Container>
    )
}