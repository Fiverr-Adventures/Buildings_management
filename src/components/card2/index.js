import  {useState } from "react";

export default function Card2(props) {

    const [modalToggle, setModalToggle] = useState(props.show);

    const HandleToggle = ()=> {
        setModalToggle(false);
    }
    
    const MyModal = ()=> {
        return (
            <div onClick={ HandleToggle }  className="backdrop" >
                <div  className="content-wrapper_" >
                    <div className="content_"> 
                        {props.children}
                    </div>
                </div>
            </div>
          );
    }
    return (
        <MyModal  show = {modalToggle}>
            {/* <div>
                <h1 style={{color:"black"}}>hello world</h1>
                <p>Adipisicing ut aliquip elit esse adipisicing nostrud irure. .</p>
            </div> */}
        </MyModal>
    );
}
