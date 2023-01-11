import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import "./Modal.scss";

interface ModalColorsType {
  show: boolean;
  handleClose: () => void;
  title: string;
  handleShow: () => void;
}

const ModalForEditColor = ({ show, title }: ModalColorsType) => {
  const dispatch = useDispatch<Dispatch>();

  const { colorById } = useSelector((state: RootState) => state.Directory);

  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-input">
          <input
            type="text"
            placeholder="name"
            defaultValue={colorById?.name}
          />
          <input
            type="text"
            placeholder="name"
            defaultValue={colorById?.code}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch.other.setShowForColor(false)}
        >
          Закрыт
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            dispatch.Directory.deleteColors(colorById?._id);
            dispatch.other.setShowForColor(false);
          }}
        >
          Удалить
        </Button>
        <Button variant="primary">Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForEditColor;
