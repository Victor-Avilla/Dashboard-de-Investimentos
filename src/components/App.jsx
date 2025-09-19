import { useState } from 'react'

import '../styles/index.css'
import Header from './Header'
import Dashboard from './Dashboard'

function App() {
    return(
        <div className='bg-slate-950 w-screen h-screen'>
            
            <Header />
            <Dashboard />

        </div>
    )
}

export default App
