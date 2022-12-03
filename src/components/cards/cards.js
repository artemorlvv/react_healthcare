import './cards.css';
import Card from '../../subcomponents/card/card';
import Appoint from '../../images/card_app.svg';
import Pat from '../../images/card_pat.svg';
import Oper from '../../images/card_oper.svg';
import Hospital from '../../images/card_hospital.svg';

function Cards() {
    return (
        <div id="cards">
            <Card img={Appoint} h="Appointments" text="213"/>
            <Card img={Pat} h="New Patients" text="104"/>
            <Card img={Oper} h="Operations" text="24"/>
            <Card img={Hospital} h="Hospital Earnings" text="$ 12,174"/>
        </div>
    );
}

export default Cards;