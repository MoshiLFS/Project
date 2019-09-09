import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import routes from './config'
import Routerview from './routerview'
export default function Router() {
    return (
        <BrowserRouter>
            <Routerview routes={routes}></Routerview>
        </BrowserRouter>
    )
}