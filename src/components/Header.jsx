import { ChartNoAxesCombined } from 'lucide-react'
import { Search } from 'lucide-react'
function Header() {
    return (
        <section className='bg-slate-900 border-b border-slate-800'>
            <div className='flex items-start p-5'>
                <div className='w-12 h-12 rounded-xl items-center justify-center bg-gradient-to-tl from-red-700 to-green-500 '>
                    <ChartNoAxesCombined size={38} color='#fff' />
                </div>
                <h1 className='text-4xl text-white font-bold '>Investing Data</h1>
                <input type="text" placeholder='Busque por um ativo'className='bg-slate-950 rounded-md border border-slate-800 placeholder-slate-500 p-1'/><span className='ml-1'><Search color='#3f567e'/></span><input/>
                
            </div>
        </section>
    )

}

export default Header