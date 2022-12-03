import './patient.css';
import change from '../../images/change_btn.svg';
import delete_btn from '../../images/delete_btn.svg';

function Patient(props) {
    return (
        <div id="patient">
            <div id="name">
                <div className="patient_img"><img src={props.img} /></div>
                <div className="patient_text patient_name">{props.name}</div>
            </div>
            <div id="email" className="patient_text">{props.email}</div>
            <div id="date" className="patient_text">{props.date}</div>
            <div id="visit" className="patient_text">{props.visit}</div>
            <div id="doctor" className="patient_text">{props.doctor}</div>
            <div id="conditions" className="patient_text">{props.conditions}</div>
            <div id="buttons">
                <div id="btn"><img src={change} alt="" /></div>
                <div id="btn"><img src={delete_btn} alt="" /></div>
            </div>
        </div>
    );
}

export default Patient;