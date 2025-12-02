import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home"
import DefaultLayout from "../layouts/DefaultLayout";
import Analitics from "../pages/Analitics/Analitics";
import Transactions from "../pages/Transactions/Transactions";

export default function Router() {

    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="analitics" element={<Analitics/>}/>
                <Route path="transactions" element={<Transactions/>}/>
            </Route>
        </Routes>
    )
}