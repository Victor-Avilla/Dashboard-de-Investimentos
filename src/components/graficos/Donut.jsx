import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend)
export default function DonutGraph() {

    const options ={

        responsive:'true'

    }

    const data = {
        labels: [
            'Ações', 'FIIs', 'Renda Fixa', 'Cripto'
        ],
        datasets: [{
            label: 'Ativos',
            data: [30, 10, 50, 10],
            backgroundColor: [
                '#c75820',
                '#b2eb36',
                '#ffb813',
                '#3f567e']
        }]
    }
    return <Doughnut options={options} data={data} />

}
