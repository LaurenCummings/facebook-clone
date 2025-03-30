import '../css/CloseFriend.css';

function CloseFriend({user}) {
    return (
        <div>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src={user.profilePicture} alt="" />
                <span className="leftbarFriendName">{user.username}</span>
            </li>
        </div>
    )
}

export default CloseFriend;