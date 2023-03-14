import { Routes, Route } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
// import { SystemRoutes } from "../sistema/routes/systemRoutes"
import { SystemRoutes } from "../sistema/routes/SystemRoutes"

export const AppRouter = () => {
    return (

        <Routes>
            {/*Nuesto login y registo*/}
            <Route path="auth/*" element={<AuthRoutes />} />

            {/*Cuando ya este autentica puede ver la pantalla del carrito de compras*/}

            <Route path="/*" element={<SystemRoutes />} />
        </Routes>

    )
}
