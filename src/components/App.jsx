
import '../styles/index.css'

import DefaultLayout from '../layouts/DefaultLayout'


function App() {
    return (
        <div >

            <DefaultLayout/>

            {/* <div className='
            grid grid-cols-2 gap-3.5 p-5 
            md:grid-cols-3  
            lg:grid-cols-6 lg:mx-10
            xl:mx-40 xl'>

                <Cards Icon={PiggyBank} iconColor={'bg-sky-800'} bgIconColor={'text-sky-200'} title={'Patrimonio Total'} data={'R$ 100.000,00'} value={'+5.3%'} />
                <Cards Icon={Wallet} iconColor={'bg-violet-800'} bgIconColor={'text-violet-200'} title={'Ativos'} data={'5'} value={'4 categorias'} />
                <Cards Icon={ChartNoAxesColumn} iconColor={'bg-green-700'} bgIconColor={'text-green-200'} title={'Rendimento'} data={'-R$ 2.000,00 '} value={'-0.2% mês'} />
                <Cards Icon={TrendingUp} iconColor={'bg-emerald-800'} bgIconColor={'text-emerald-200'} title={'Maior Alta'} data={'BTC'} value={'+10.6%'} />
                <Cards Icon={Percent} iconColor={'bg-yellow-800'} bgIconColor={'text-yellow-200'} title={'Performance'} data={'97.4%'} value={'vs IBOV'} />
                <Cards Icon={TrendingDown} iconColor={'bg-red-800'} bgIconColor={'text-red-200'} title={'Maior Baixa'} data={'VALE3'} value={'-3.4%'} />


            </div>
            <div className='
            grid grid-cols-1 gap-5 pb-5 mx-5
            md:grid-cols-2 
            lg:grid-cols-3 '>

                <Dashboard type='donut' />
                <Dashboard type='line' />
                <Dashboard type='bar' />

            </div> */}



        </div>
    )
}

export default App
