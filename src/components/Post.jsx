import '../css/Post.css';
import { useState } from 'react';
import likeIcon from '../assets/like.png';
import heartIcon from '../assets/heart.png';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../dummyData';

function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img 
                            className="postProfileImg" 
                            src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} 
                            alt="" 
                        />
                        <span className="postUsername">
                            {Users.filter((u) => u.id === post?.userId)[0].username}
                        </span>
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
                        <img 
                            className="likeIcon" 
                            src={likeIcon} 
                            alt="" 
                            onClick={likeHandler}
                        />
                        <img 
                            className="likeIcon" 
                            src={heartIcon} 
                            alt="" 
                            onClick={likeHandler}
                        />
                        <span className="postLikeCounter">{like}</span>
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