import "./App.css";
import Close from "./Close";

function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-container">
        <div className="modal-wrap">
          <div className="close-icon-container" onClick={onClose}>
            <Close width="20px" height="20px" />
          </div>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
