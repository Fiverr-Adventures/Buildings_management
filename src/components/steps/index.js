const Steps = (props) => {
    return ( 
        <div className="req-steps">
            <div className={`req-step ${ props.nbr >= 1 ? props.className : null}`}>
                <div>
                    <span></span>
                    <p className="step"> Submitted </p>
                </div>
                <div className="a-after"></div>
            </div>
            {/* ************************************** */}
            <div className={`step ${ props.nbr >= 2 ? props.className : null}`}>
                <div >
                    <span></span>
                    <p className="step"> Department Manager </p>
                </div>
                <div className="a-after"></div>
            </div>
            {/* ************************************** */}
            <div className={`step ${ props.nbr >= 3 ? props.className : null}`}>
                <div>
                    <span></span>
                    <p className="step"> Building Managers </p>
                </div>
                <div className="a-after"></div>
            </div>
              {/* ************************************** */}
            <div className={`step ${ props.nbr >= 4 ? props.className : null}`}>
                <div>
                    <span></span>
                    <p className="step"> UWPD </p>
                </div>
                <div className="a-after"></div>
            </div>
        </div>
     );
}
 
export default Steps;