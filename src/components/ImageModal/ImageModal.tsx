import Modal from "react-modal";
import { ModalProps } from "./ImageModal.type";

const customStyles: Modal.Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(1, 1, 1, 0.9)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "0",
    border: "none",
    overflow: "hidden",
    background: "transparent",
  },
};
Modal.setAppElement("#root");

export default function ImageModal({ image, isOpen, onClose }: ModalProps) {
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
      <div>
        <img src={image} alt="Selected Image" />
      </div>
    </Modal>
  );
}
