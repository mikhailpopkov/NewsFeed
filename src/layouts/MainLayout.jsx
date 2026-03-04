import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Modal from "../components/UI/Modal/Modal"
import { useState } from "react";


function MainLayout() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="layout">
            <Header openModal={(i) => setIsVisible(i)}/>
            <div className="container">
                <Outlet/>
            </div>
            <Modal isVisible={isVisible}/>
        </div>
    )
}

export default MainLayout