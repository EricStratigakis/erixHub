import styles from "./style.module.scss";

const Modal = ({ handleClose, show, children }) => {
  return (
    show && (
      <div className={styles.Modal}>
        <section className={styles.ModalMain}>
          {children}
          <button type="button" onClick={handleClose}>
            Close
          </button>
        </section>
      </div>
    )
  );
};

export default Modal;
