import * as React from "react";

import styles from "./Modal.module.scss";

interface Props {
  modalOpen: boolean;
  toggleModal: (isOpen: boolean) => void;
}

// className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center"

// className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"

const Modal: React.FC<Props> = ({ children, toggleModal, modalOpen }) => {
  return (
    <div>
      {modalOpen && (
        <section className={styles.container}>
          <article>
            {children}
            <button onClick={() => toggleModal(false)} className="z-50">
              Cerrar
            </button>
          </article>
        </section>
      )}
      <button onClick={() => toggleModal(true)}>Abrir Modal</button>
    </div>
  );
};

export default Modal;
