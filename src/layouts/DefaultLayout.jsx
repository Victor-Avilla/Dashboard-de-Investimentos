
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";


function DefaultLayout() {
    
    // const navigate = useNavigate()

    return (

        <main className='bg-slate-950 h-full w-screen md:h-screen lg:h-screen xl:h-screen'>
            <Header />
            {/* <section className="flex gap-3 bg-stone-50 m-4 p-2 w-fit rounded-md">
                <button onClick={() => navigate("/")}>Resumo</button>
                <button onClick={() => navigate("/analitics")}>Analise</button>
                <button onClick={() => navigate("/transactions")}>Transacoes</button>
            </section> */}
            <Outlet />
        </main>


    );
}

export default DefaultLayout;