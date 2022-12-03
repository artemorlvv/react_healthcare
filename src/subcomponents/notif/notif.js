import './notif.css';
import circle from '../../images/notif_circle.svg';
import bell from '../../images/notif_bell.svg';


function Notif() {
    return (
        <div id="notif">
            <div id="notif_circle">
                <img src={circle} id="circle" alt="" />
                <div id="notif_text">9</div>
            </div>
            <img src={bell} id="bell" alt="" />
        </div>
    );
}

export default Notif;