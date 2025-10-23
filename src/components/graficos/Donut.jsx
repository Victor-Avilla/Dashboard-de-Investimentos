import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend)
export default function DonutGraph() {

    const options = {
        responsive: 'true',
        maintainAspectRatio: 'true',
        plugins: {
            legend: {
                position:'bottom',
                labels: {
                    color: '#64748b'
                }}
        },
        layout: {
            padding: 10,
        }
    }

    const data = {
        labels: [
            'Ações', 'FIIs', 'Renda Fixa', 'Cripto',
        ],
        datasets: [{
            label: 'Ativos',
            data: [30, 20, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 133, 0.350)',
                'rgba(255, 159, 64, 0.350)',
                'rgba(255, 205, 86, 0.350)',
                'rgba(75, 192, 192, 0.350)',
                'rgba(54, 162, 235, 0.350)',
                'rgba(153, 102, 255, 0.350)',
                'rgba(201, 203, 207, 0.350)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    }
    return <Doughnut options={options} data={data} />

}
