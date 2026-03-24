import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header.tsx";
import Modal from "../components/UI/Modal/Modal.tsx";
import { useState } from "react";

const MainLayout: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className="layout">
      <Header openModal={() => setIsVisible(true)} />
      <div className="container">
        <Outlet />
      </div>
      <Modal isVisible={isVisible} closeModal={() => setIsVisible(false)} />
    </div>
  );
};

export default MainLayout;
