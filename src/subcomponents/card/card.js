import './card.css';


function Card(props) {
    return (
        <div id="card">
            <div id="card_img">
                <img src={props.img} alt="" />
            </div>
            <div id="card_text">
                <div id="card_h">{props.h}</div>
                <div id="card_text">{props.text}</div>
            </div>
        </div>
    );
}

export default Card;