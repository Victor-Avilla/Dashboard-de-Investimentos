import LineGraph from "./graficos/Line"
import DonutGraph from "./graficos/Donut.jsx"
import BarGraph from "./graficos/Bar.jsx"

function Dashboard({ type }) {

    const charts = {
        donut: <DonutGraph />,
        line: <LineGraph />,
        bar: <BarGraph />
    }

    return (
        <section className='flex items-center justify-center bg-slate-900 rounded-md border border-slate-800 max-w-full min-w-2xs max-h-screen min-h-80 px-5 lg:px-5 ' >

            {charts[type]}

        </section >
    )
}

export default Dashboard