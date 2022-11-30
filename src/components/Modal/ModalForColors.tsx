import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
import "./Modal.scss";

interface ModalColorsType {
  show: boolean;
  handleClose: () => void;
  title: string;
  handleShow: () => void;
}

interface HookName {
  name: string;
  code: string;
}

interface HookCode {
  name: string;
  code: string;
}

const ModalForColors = ({
  show,
  handleClose,
  title,
  handleShow,
}: ModalColorsType) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch<Dispatch>();

  const payload = () => {
    try {
      const data = dispatch.Directory.addColors({
        name,
        code,
      });
      setCode("");
      setName("");
      handleClose();
    } catch (e) {
      handleShow();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-input">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
            value={name}
          />
          <input
            onChange={(e) => setCode(e.target.value)}
            type="text"
            placeholder="name"
            value={code}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Закрыт
        </Button>
        <Button variant="primary" onClick={payload}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForColors;
