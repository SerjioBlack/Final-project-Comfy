import {Route, Routes} from "react-router-dom";
import routesArray from './routesMapping'
import {useEffect, useState} from "react";


const RoutesMapping =  () => {
    const [routes, setRoutes] = useState(null)

    useEffect(() => {
        setRoutes(routesArray.map( ({path, component: Component}) => {
            return <Route key={path} path={path} element={<Component />} />
        }))
    }, [])

    return <Routes>
        {routes}
        {/*{routes !== null ? routes : null}*/}

        {/*<Route path="/" element={<HomePage />} />*/}

        {/*<Route path="todos" element={<TodosPage />} />*/}

        {/*<Route*/}
        {/*    path="*"*/}
        {/*    element={<PageNotFound />}*/}
        {/*/>*/}
    </Routes>
}

export default RoutesMapping


{/* принимаем динамический параметр */}
{/*<Route path="invoices/:invoiceId" element={<SingleInvoice />} />*/}
{/**/}
{/*<Route path="expenses" element={<Expenses />} />*/}
