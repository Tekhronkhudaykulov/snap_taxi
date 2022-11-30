import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { Dispatch } from "../../store";
import "./Modal.scss";

interface ModalBrandTpye {
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}
const ModalForBrand = ({ show, handleClose, handleShow }: ModalBrandTpye) => {
  const dispatch = useDispatch<Dispatch>();

  const [logo, setPhoto] = useState({});
  const [name, setName] = useState("");

  const convertBase64 = (file, element) => {
    const fileReader = new FileReader();

    fileReader.addEventListener("load", function (e) {
      element.src = e.target.result;
    });

    fileReader.readAsDataURL(file);
  };

  const payload = () => {
    try {
      const data = dispatch.Directory.addBrands({ logo, name });
      setName("");
      handleClose();
    } catch (e) {
      handleShow();
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Бренды</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-input">
          <div className="photo-car mb-10">
            <label className="photo-car__input">
              <span>
                Добавить <br /> фото авто
              </span>
              <input
                type="file"
                name="images"
                onChange={(e) => {
                  convertBase64(
                    e.target.files[0],
                    document.querySelectorAll("#img_file")[0]
                  );
                  setPhoto(e.target.files[0]);
                }}
                multiple
                accept="image/png , image/jpeg, image/webp"
              />
            </label>
            <div className="photo-car__items">
              <div className="image">
                <img
                  style={{
                    marginLeft: "30px",
                    height: "100px",
                    width: "100px",
                    objectFit: "cover",
                  }}
                  src=""
                  id="img_file"
                  className="photo-car__item"
                  alt="no photo"
                />
              </div>
            </div>
          </div>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="name"
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

export default ModalForBrand;
