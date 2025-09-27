import { useState } from 'react'

import '../styles/index.css'
import Header from './Header'
import Dashboard from './Dashboard'
import Cards from './Cards'

function App() {
    return (
        <div className='bg-slate-950 w-full h-screen'>

            <Header />

            <div className='
            grid grid-cols-2 gap-3.5 p-5 
            md:grid-cols-3  
            lg:grid-cols-6 lg:mx-30
            xl:mx-40 xl'>

                

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                <Dashboard />
                <Dashboard />
                <Dashboard />

            </div>



        </div>
    )
}

export default App
