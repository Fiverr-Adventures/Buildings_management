import MonicaImg from '../../assets/icons/svg/monica.png'
const ReqProfil = () => {
    return ( 
        <div className="req-profil">
            <img src={MonicaImg} alt="" />
            <div>
                <h4>Monica</h4>
                <h4>Hall</h4>
                <p className="b-text-b">mhall2@wisc.edu</p>
            </div>
        </div>
     );
}
 
export default ReqProfil;