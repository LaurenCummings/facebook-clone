import '../css/Profile.css';
import Topbar from '../components/Topbar';
import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';
import coverImage from '../assets/post/3.jpeg';
import userImage from '../assets/person/7.jpeg';

function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img 
                                className="profileCoverImg" 
                                src={coverImage} 
                                alt="" 
                            />
                            <img 
                                className="profileUserImg" 
                                src={userImage} 
                                alt="" 
                            />                            
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friends</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;