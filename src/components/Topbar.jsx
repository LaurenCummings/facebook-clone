import '../css/Topbar.css';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import person1 from '../assets/person/1.jpeg';

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Lamasocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input  placeholder="Search for friends, posts, or videos" 
                            className="searchInput" 
                    />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">1</span>                        
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">2</span>                        
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>                        
                    </div>
                </div>
                <img src={person1} alt="" className="topbarImg" />
            </div>
        </div>
    )
}

export default Topbar;