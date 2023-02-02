import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import { GetTypeByIdType } from "../../store/directory/types";
import "./Modal.scss";

interface ModalType {
  show: boolean;
  typeById: GetTypeByIdType;
}
const ModalForEditType = ({ show, typeById }: ModalType) => {
  const [brand, setBrand] = useState("");

  const [name, setName] = useState("");

  const { type } = useSelector((state: RootState) => state.Directory);

  const dispatch = useDispatch<Dispatch>();

  return (
    <Modal show={show}>
      <Modal.Header closeButton>
        <Modal.Title>Типы</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-input">
          <input defaultValue={typeById?.name} type="text" placeholder="name" />
          <select onChange={(e) => setBrand(e.target.value)} placeholder="name">
            {type.map((item) => (
              <option defaultValue={typeById?.name} value={item?.brand}>
                {item?.name}
              </option>
            ))}
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch.other.setShowForType(false)}
        >
          Закрыт
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            dispatch.Directory.deleteTypesById(typeById?._id);
            dispatch.other.setShowForType(false);
          }}
        >
          Удалить
        </Button>
        <Button variant="primary">Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForEditType;
