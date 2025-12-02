import Dashboard from '../../components/Dashboard'
import Cards from '../../components/Cards'
import { TrendingUp, TrendingDown, PiggyBank, ChartNoAxesColumn, Percent, Wallet } from 'lucide-react'
import '../../styles/index.css'
function Home() {

    //mudar useState quando a rota for selecionada
    return (
        <>
            <div className=' 
            grid grid-cols-2 gap-3.5 p-5 
            md:grid-cols-3  
            lg:grid-cols-6 lg:mx-3 
            xl:mx-5'>

                <Cards Icon={PiggyBank} iconColor={'bg-sky-800'} bgIconColor={'text-sky-200'} title={'Patrimonio'} data={'R$ 80.000,00'} value={'+5.3%'} subtitleColor={'text-green-500'}/>
                <Cards Icon={Wallet} iconColor={'bg-violet-800'} bgIconColor={'text-violet-200'} title={'Ativos'} data={'5'} value={'4 categorias'} subtitleColor={'text-yellow-500'} />
                <Cards Icon={ChartNoAxesColumn} iconColor={'bg-green-700'} bgIconColor={'text-green-200'} title={'Rendimento'} data={'-R$ 2.000,00 '} value={'-2% mês'} subtitleColor={'text-red-500'}/>
                <Cards Icon={TrendingUp} iconColor={'bg-emerald-800'} bgIconColor={'text-emerald-200'} title={'Maior Alta'} data={'BTC'} value={'+10.6%'} subtitleColor={'text-green-500'} />
                <Cards Icon={Percent} iconColor={'bg-yellow-800'} bgIconColor={'text-yellow-200'} title={'Performance'} data={'97.4%'} value={'vs IBOV'} subtitleColor={'text-green-500'} />
                <Cards Icon={TrendingDown} iconColor={'bg-red-800'} bgIconColor={'text-red-200'} title={'Maior Baixa'} data={'VALE3'} value={'-3.4%'} subtitleColor={'text-red-500'} />


            </div>
            <div className='
            grid grid-cols-1 gap-5 pb-5 mx-5
            md:grid-cols-2 
            lg:grid-cols-3 '>

                <Dashboard type='donut' />
                <Dashboard type='line' />
                <Dashboard type='bar' />

            </div>
        </>)
}
export default Home