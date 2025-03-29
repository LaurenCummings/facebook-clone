import '../css/Post.css';
import person1 from '../assets/person/1.jpeg';
import post1 from '../assets/post/1.jpeg';
import like from '../assets/like.png';
import heart from '../assets/heart.png';
import { MoreVert } from '@mui/icons-material';

function Post({post}) {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={person1} alt="" />
                        <span className="postUsername">Safak Kocaoglu</span>
                        <span className="postDate">{post.date}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img className="postImg" src={post.photo} alt="" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src={like} alt="" />
                        <img className="likeIcon" src={heart} alt="" />
                        <span className="postLikeCounter">{post.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;