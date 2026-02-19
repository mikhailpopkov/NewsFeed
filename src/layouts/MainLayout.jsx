import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"


function MainLayout() {
    return (
        <div className="layout">
            <Header/>
            <div className="container">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout