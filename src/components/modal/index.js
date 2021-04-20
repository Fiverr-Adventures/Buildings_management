
export default function MyModal(props) {

    const sendAdd = () => {
        props.sendAdd(false);
    }

    return (
        <>
            <div onClick={
                () => {
                    sendAdd()
                    props.onClick()
                }
            }
                className="backdrop" />
            <div className={` content-wrapper_ ${props.className}`} >
                {props.children}
            </div>
        </>
    );
}
