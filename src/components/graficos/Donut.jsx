import { Doughnut } from "react-chartjs-2";

export default function donut() {

    const config ={
        type:'Doughnut',
    }

    const donutData = {
        labels: ['Ações', 'FIIs', 'Renda Fixa', 'Cripto'],
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

}
