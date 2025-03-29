import '../css/Feed.css';
import Share from '../components/Share';
import Post from '../components/Post';
import { Posts } from '../dummyData';

function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </div>
        </div>
    )
}

export default Feed;