import { Route, Routes } from "react-router-dom";
import routesArray from './routesMapping'
import { useEffect, useState } from "react";


const RoutesMapping = () => {
    const [routes, setRoutes] = useState(null)

    useEffect(() => {
        setRoutes(routesArray.map(({ path, component: Component }) => {
            return <Route key={path} path={path} element={<Component />} />
        }))
    }, [])

    return <Routes>
        {routes}
    </Routes>
}

export default RoutesMapping

