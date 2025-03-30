import '../css/Profile.css';
import Topbar from '../components/Topbar';
import Leftbar from '../components/Leftbar';
import Feed from '../components/Feed';
import Rightbar from '../components/Rightbar';

function Profile() {
    return (
        <div>
            <Topbar />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">

                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar />                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;