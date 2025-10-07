import { Line } from "react-chartjs-2";
import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default function LineGraph() {

    const options ={
        responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Histórico de Rendimento',
            },
            pointBackgroundColor: '#c45b1a',
        }
    

    const data = {
        
        labels:[
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ],
        datasets:[{
            label: 'Patrimonio',
            data:[0,200,5000,3000,8000,7600,4000,10000,40000,65500,80000,100000],
            borderColor: '#776015',
        }]
    }

    return <Line options={options} data={data} />

}