import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import "./Modal.scss";

interface ModalType {
  show: boolean;
  handleClose: () => void;
  name: string;
  handleShow: () => void;
}
const ModalForType = ({ show, handleClose, handleShow }: ModalType) => {
  const [brand, setBrand] = useState("");

  const [name, setName] = useState("");

  const { type } = useSelector((state: RootState) => state.Directory);

  const dispatch = useDispatch<Dispatch>();

  const payload = () => {
    try {
      const data = dispatch.Directory.addTypes({
        brand,
        name,
      });
      setName("");
      setBrand("");
      handleClose();
    } catch (e) {
      handleShow();
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Типы</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-input">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <select onChange={(e) => setBrand(e.target.value)} placeholder="name">
            <option value=""></option>
            {type.map((item) => (
              <option value={item?.brand}>{item?.name}</option>
            ))}
          </select>
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

export default ModalForType;
