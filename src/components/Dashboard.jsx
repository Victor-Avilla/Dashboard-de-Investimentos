import ChartsConfig from "./Charts"

function Dashboard() {
    return (
        <section className=' max-w-full px-5 lg:px-5'>

            <div className=" bg-slate-900 rounded-md border border-slate-800">

            <ChartsConfig
                title="Distribuição dos Investimentos"
                type="donut"
                series={[40, 30, 20, 10]} // valores
                categories={["Ações", "FIIs", "Cripto", "Renda Fixa"]} // labels
            />

            </div>


        </section>
    )
}

export default Dashboard