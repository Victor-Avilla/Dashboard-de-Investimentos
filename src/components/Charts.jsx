import ReactApexChart from 'react-apexcharts'

export default function ChartsConfig({ title, type, series, categories }) {

    const options = {

        chart: {
            background: "transparent",
            toolbar: { show: false }, // remove botões extras
        },
        labels: categories, // útil no caso de donut/pizza
        xaxis: {
            categories: categories, // útil no caso de linha/coluna
            labels: { style: { colors: "#94a3b8" } }, // cinza claro
        },
        yaxis: {
            labels: { style: { colors: "#94a3b8" } },
        },
        legend: {
            labels: { colors: "#94a3b8" },
        },
        theme: { mode: "dark" },
    };

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <h2 className="text-white font-bold mb-3">{title}</h2>
            <ReactApexChart type={type} series={series} options={options} height={300} />
        </div>
    );
}

