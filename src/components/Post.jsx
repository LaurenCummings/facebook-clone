import '../css/Post.css';
import person1 from '../assets/person/1.jpeg';
import { MoreVert } from '@mui/icons-material';

function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={person1} alt="" />
                        <span className="postUsername">Safak Kocaoglu</span>
                        <span className="postDate">5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">

                </div>
                <div className="postBottom">

                </div>
            </div>
        </div>
    )
}

export default Post;