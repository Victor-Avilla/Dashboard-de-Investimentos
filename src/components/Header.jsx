import { ChartNoAxesCombined } from 'lucide-react'
import { Search } from 'lucide-react'
function Header() {
    return (
        <section className='flex justify-between items-center px-5 bg-slate-900 border-b border-slate-800'> {/* bg do header */}
            {/* itens a esquerda */}
            <div className='flex items-center pb-5 pt-5 gap-x-3 md:mx-5'>                 
                <div className='flex w-12 h-12 rounded-lg items-center justify-center bg-gradient-to-tl from-yellow-500 to-orange-800 '>
                    <ChartNoAxesCombined size={38} color='#fff' />
                </div>
                <h1 className=' text-xl text-white font-bold '>Investing Data</h1>
            </div>
            {/* itens a direita */}
            <div className='flex items-center pb-5 pt-5 min-w-0 flex-grow justify-end md:mx-5'> 
                <input type="text" placeholder='Busque por um ativo' className='grow max-w-xs min-w-0 text-white bg-slate-950 rounded-md border border-slate-800 placeholder-slate-500 p-1 md:min-w-52' />
                <button type='button'className='ml-1 cursor-pointer'><Search color='#3f567e' /></button>
            </div>

        </section>
    )

}

export default Header