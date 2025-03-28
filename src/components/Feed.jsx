import '../css/Feed.css';
import Share from '../components/Share';
import Post from '../components/Post';

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default Feed;