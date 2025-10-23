import LineGraph from "./graficos/Line"
import DonutGraph from "./graficos/Donut.jsx"
import BarGraph from "./graficos/Bar.jsx"

function Dashboard({type}) {

    const charts={
        donut: <DonutGraph/>,
        line: <LineGraph/>,
        bar: <BarGraph/>
    }

    return (
        <section className=' max-w-full px-5 lg:px-5' >

            <div className=" bg-slate-900 rounded-md border border-slate-800">

               {charts[type]}

            </div>


        </section >
    )
}

export default Dashboard