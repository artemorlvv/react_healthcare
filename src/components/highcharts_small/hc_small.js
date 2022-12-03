import './hc_small.css'
import Highchart from '../../subcomponents/highchart/highchart';

function Hc_small() {
    return (
        <div id="hc_small">
            <div id="hc">
                <Highchart />
            </div>
            <div id="hc">
                <Highchart />
            </div>
        </div>
    );
}

export default Hc_small;