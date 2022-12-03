import './header.css';
import SearchBar from '../../subcomponents/search_bar/search_bar';
import ProfilePic from '../../subcomponents/profile_pic/pfp';
import Notif from '../../subcomponents/notif/notif';

function Header() {
    return (
        <div id="main_header">
                <div id="main_header-left">
                    <SearchBar />
                </div>
                <div id="main_header-right">
                    <Notif />
                    <ProfilePic />
                </div>
        </div>
    );
}

export default Header;