import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

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

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
        },
        pointBackgroundColor: '#0f6070',
        layout: {
            padding: 10,
        }
    }


    const data = {

        labels: [
            "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"
        ],
        datasets: [{
            label: 'Patrimonio Total',
            data: [0, 200, 5000, 10000, 3000, 8000, 7600, 4000, 30000, 15500, 60000, 80000],
            borderColor: '#026756',
        }]
    }

    return <Line options={options} data={data} />

}