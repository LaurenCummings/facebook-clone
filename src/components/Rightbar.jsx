import '../css/Rightbar.css';
import gift from '../assets/gift.png';

function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src={gift} alt="" />
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Rightbar;