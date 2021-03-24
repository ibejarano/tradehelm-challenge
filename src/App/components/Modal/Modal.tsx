import * as React from "react";

import styles from "./Modal.module.scss";

interface Props {
  modalOpen: boolean;
}

const Modal: React.FC<Props> = ({ children, modalOpen }) => {
  return (
    <div>
      {modalOpen && (
        <section className={styles.container}>
          <article>{children}</article>
        </section>
      )}
    </div>
  );
};

export default Modal;
