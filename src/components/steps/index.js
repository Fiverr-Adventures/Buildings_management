const Steps = () => {
    return ( 
        <div className="steps">
            <div className="step active-step">
                <div>
                    <span></span>
                    <p className="step active-step"> Submitted </p>
                </div>
                <div className="a-after"></div>
            </div>
            <div className="step">
                <div >
                    <span></span>
                    <p className="step"> Department Manager </p>
                </div>
                <div className="a-after"></div>
            </div>
            <div className="step">
                <div href="#">
                    <span></span>
                    <p className="step"> Building Managers </p>
                </div>
                <div className="a-after"></div>
            </div>
            <div className="step">
                <div href="#">
                    <span></span>
                    <p className="step"> UWPD </p>
                </div>
                <div className="a-after"></div>
            </div>
        </div>
     );
}
 
export default Steps;