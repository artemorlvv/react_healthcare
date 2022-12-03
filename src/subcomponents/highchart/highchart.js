import './highchart.css';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    plotOptions: {
        series: {
            marker: {
                enabled: false
            }
        }
    },
    tooltip: {
        formatter: function() {
            return this.y;
        },
        borderColor: 'white',
        style: { "color": "#25282B", "fontSize": "12px" , "font-family": 'Lato'}
    },
    yAxis: {
        gridLineDashStyle: 'dash',
        title: {
            text: false
        },
    },
    xAxis: {
        crosshair: {
            dashStyle: 'dash'
        }
    },
    legend: {
        verticalAlign: "top",
        floating: true,
        align: "right",
        itemStyle: {
            color: "#A0A4A8"
        }
    },
    chart: {
        gridLineDashStyle: "dot",
        type: 'spline'
    },
    title: {
        align: "left",
        text: 'Hospital survey',
        style: { "color": "#25282B", "fontSize": "20px" , "font-family": 'Lato'},
        margin: 30
    },
    series: [{
        name: "Patients 2019",
        color: "#FAC032",
        data: [50, 120, 80, 170, 110, 160, 130, 180, 90, 170]
    }, {
        name: "Patients 2020",
        color: "#336CFB",
        data: [140, 105, 210, 115, 165, 140, 190, 140, 220, 180, 250]
    }]
}

function Highchart() {
    return (
        <div id="Highchart">
            <div>
            <HighchartsReact highcharts={Highcharts} options={options}/>
            </div>
        </div>
    );
}

// render(<Highchart />, document.getElementById('root'));
export default Highchart;