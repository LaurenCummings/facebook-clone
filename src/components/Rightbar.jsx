import '../css/Rightbar.css';
import gift from '../assets/gift.png';
import ad from '../assets/ad.png';
import person3 from '../assets/person/3.jpeg';

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
                <img className="rightbarAd" src={ad} alt="" /> 
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src={person3} alt="" />
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">John Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Rightbar;