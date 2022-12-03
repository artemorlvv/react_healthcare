import './pfp.css';
import pfp from '../../images/pfp.png';

function ProfilePic() {
    return (
        <div id="profile_pic">
            <img src={pfp} alt=""/>
        </div>
    );
}

export default ProfilePic;