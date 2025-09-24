import { TrendingUp } from "lucide-react"


function Cards() {
    return (
        <section className="flex justify-center items-center">

        <div className="w-48 max-w-md h-20 max-h-64 rounded-md bg-slate-900 border border-slate-800
        text-slate-100">
            
            <h1 className="flex justify-center text-sm text-slate-500">Ativo</h1>
            <h3 className="flex justify-center font-semibold gap-x-3 px-2"><TrendingUp className="bg-rose-700 rounded-md text-white "/>Dados</h3>
            <h1 className="flex justify-center text-sm text-green-500">+13,5%</h1>

        </div>

        </section>
    )
}
export default Cards