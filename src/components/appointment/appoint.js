import './appoint.css';
import Patient from '../../subcomponents/patient/patient';
import pfp1 from '../../images/pfp_1.png';


function Appoint() {
    return (
        <div id="Appoint">
            <h2 id="appoint_h">
                Appointment Activity
            </h2>
            <div id="appoint_head">
                <div id="head_text" className='name'>Name</div>
                <div id="head_text" className='email'>Email</div>
                <div id="head_text" className='date'>Date</div>
                <div id="head_text" className='visit'>Visit Time</div>
                <div id="head_text" className='doctor'>Doctor</div>
                <div id="head_text" className='conditions'>Conditions</div>
            </div>
            <div id="patients">
            <Patient img={pfp1} name="Leslie Alexander" email="lesie.alexander@example.com" date="10/10/2020" visit="09:15-09:45am" doctor="Dr. Jacob Jones" conditions="Mumps Stage II" />
            <Patient img={pfp1} name="Leslie Alexander" email="lesie.alexander@example.com" date="10/10/2020" visit="09:15-09:45am" doctor="Dr. Jacob Jones" conditions="Mumps Stage II" />
            </div>
        </div>
    );
}

export default Appoint;