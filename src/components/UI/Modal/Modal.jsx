import cl from "./Modal.module.scss";

function Modal({isVisible}) {
    if (!isVisible) return null;

    return (
        <div className={cl.modal}>
            <div className={cl.modalContainer}>
                Модальное окно
            </div>
        </div>
    )
}

export default Modal