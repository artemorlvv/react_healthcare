import './main.css';
import Highchart from '../../subcomponents/highchart/highchart';
import Header from '../header/header';
import Cards from '../cards/cards';
import Hc_small from '../highcharts_small/hc_small';
import Appoint from '../appointment/appoint';


function Main() {
    return (
        <div id="main">
            <Header />
            <Cards />
            <Highchart />
            <Hc_small />
            <Appoint />
        </div>
    );
}

export default Main;