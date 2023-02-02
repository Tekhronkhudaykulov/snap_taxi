import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch, RootState } from "../../store";
import "./Modal.scss";

interface ModalBrandTpye {
  show: boolean;
}

const ModalForEditBrand = ({ show }: ModalBrandTpye) => {
  const dispatch = useDispatch<Dispatch>();

  const { brandById } = useSelector((state: RootState) => state.Directory);

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
    } catch (e) {}
  };

  return (
    <Modal show={show}>
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
            type="text"
            placeholder="name"
            defaultValue={brandById?.name}
            name="name"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch.other.setShowForBrand(false)}
        >
          Закрыт
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            dispatch.Directory.deleteBrandId(brandById?._id);
            dispatch.other.setShowForBrand(false);
          }}
        >
          Удалить
        </Button>
        <Button variant="primary" onClick={payload}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForEditBrand;
