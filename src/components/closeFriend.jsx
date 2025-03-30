import '../css/CloseFriend.css';

function CloseFriend({user}) {
    return (
        <div>
            <li className="leftbarFriend">
                <img className="leftbarFriendImg" src={person2} alt="" />
                <span className="leftbarFriendName">Jane Doe</span>
            </li>
        </div>
    )
}

export default CloseFriend;