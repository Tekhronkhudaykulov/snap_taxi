import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import "./Modal.scss";

interface ModalType {
  show: boolean;
  name: string;
}
const ModalForType = ({ show }: ModalType) => {
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch.Directory.getBrands();
  }, []);

  const [brand, setBrand] = useState("");

  const [name, setName] = useState("");

  const brandList = useSelector((state: RootState) => state.Directory.brand);

  const payload = () => {
    try {
      const data = dispatch.Directory.addTypes({
        brand,
        name,
      });
      setName("");
      setBrand("");
      dispatch.other.setShow(false);
    } catch (e) {}
  };
  return (
    <Modal show={show}>
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
            {brandList.map((item) => (
              <option value={item?._id}>{item?.name}</option>
            ))}
          </select>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch.other.setShow(false)}
        >
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
